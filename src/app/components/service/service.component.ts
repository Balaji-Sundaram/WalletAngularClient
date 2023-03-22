import {Component, Injectable} from '@angular/core';
import {WalletDto} from "../../dto/WalletDto";
import {LoginDto} from "../../dto/LoginDto";

// @Component({
//   selector: 'app-service',
//   templateUrl: './service.component.html',
//   styleUrls: ['./service.component.css']
// })
@Injectable({
  providedIn: 'root'
})
export class ServiceComponent {
  //initialize from the login page and this service is used for the  local repository for the user data
  walletMap= new Map<number,WalletDto>();
  login:LoginDto=new LoginDto();
  constructor() {
    let date= new Date();
    //this.walletMap.set(125568,new WalletDto(125568,"Maven",2500.0,"Maven@gmail.com","Maven123",date,1234));
  }
     addWalletServ(newWallet:WalletDto, newlogin:LoginDto):void{
       if (newWallet.id != null) {
         this.walletMap.set(newWallet.id, newWallet);
       }
       this.login = newlogin;
     }

     // @ts-ignore
  getWalletServ(login:LoginDto){
       if (login.id != null) {
        return  this.walletMap.get(login.id);
       }
     }

     getAllWallet(){
       return this.walletMap;
     }
greeting(){
    window.alert("hi");
}

deletetrace(){
    this.walletMap.clear();

}
}
