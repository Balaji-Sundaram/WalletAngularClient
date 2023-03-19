import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {WalletDto} from "../../dto/WalletDto";
import {ServiceComponent} from "./service.component";

@Injectable({
  providedIn: 'root'
})
export class WalletDbServiceService {

  constructor(private httpclient:HttpClient,private service:ServiceComponent) {
  }

  getWallet(eMail: string | undefined, password: string | undefined, id: number | undefined):Observable<any>{   // it observes on the client side, and it waits to get the data
      let url:string ="http://localhost:8090/getWallet/E-Mail/"+eMail+"/Password/"+password+"/ID/"+id ;
      return this.httpclient.get(url);   // it creates a connection to the local db
  }

  addWallet(wallet:WalletDto):Observable<any>{
    let url:string ="http://localhost:8090/addWallet";
    return this.httpclient.post(url,wallet,{responseType:"json"});
  }

  addfunds(id:number,amount:number):Observable<any>{
    let url:string="http://localhost:8090/addFundstoWallet/ID/"+id+"/Amount/"+amount;
    return this.httpclient.patch(url,null);
  }

  fundTransfer(id: number, cid: number, pin: number  , amount: number  ){
    let url:string= "http://localhost:8090/fundTransfer/ID/"+id+"/CreditorID/"+cid+"/Pin/"+pin+"/Amount/"+amount;
    return this.httpclient.patch(url,null);
  }

  withDraw(id:number,pin:number,amount:number){
    let url:string= "http://localhost:8090/withdrawFunds/ID/"+id+"/Pin/"+pin+"/Amount/"+amount;
    return this.httpclient.patch(url,null);
  }

  updateWallet(wallet:WalletDto):Observable<any>{

    // @ts-ignore
    let url:string ="http://localhost:8090/updateWallet/E-Mail/"+this.service.login.gmail+"/Password/"+this.service.login.password;
    return this.httpclient.put(url,wallet);
  }
  deleteWallet():Observable<any>{
 let url:string ="http://localhost:8090/deleteWallet/E-Mail/"+this.service.login.gmail+"/Password/"+this.service.login.password+"/ID/"+this.service.login.id ;
  return this.httpclient.delete(url);
}
getallwallets():Observable<any>{
  let url:string ="http://localhost:8090/getAllWallets" ;
  return this.httpclient.get(url);
}

findWalletbyId(id:number):Observable<any>{
  let url:string ="http://localhost:8090/"+id ;
  return  this.httpclient.get(url);
}

}
