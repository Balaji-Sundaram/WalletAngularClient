import {Component, OnInit} from '@angular/core';
import {WalletDto} from "../../dto/WalletDto";
import {ServiceComponent} from "../service/service.component";
import {WalletDbServiceService} from "../service/wallet-db-service.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  constructor(private repo:WalletDbServiceService, private service:ServiceComponent,private route:Router) {
  }
 query: string="";    // use for pipe search

Walletmap = new Map<number,WalletDto>();
  // @ts-ignore
  walletdto = Array.from(this.Walletmap.values());
          ngOnInit() {
            let walletmap:Observable<any> =this.repo.getallwallets();
            walletmap.subscribe(
              {
                next:(data)=>{
                  this.Walletmap=data;
                  this.walletdto = Array.from(this.Walletmap.values());
                  console.log("datas  "+data);},
                error:(error)=>{
                  console.log(error);},
                complete:()=>{console.log("completed");}
              }
            )
            console.log(this.Walletmap);
          }



  deleteWallet(id?:number,email?:string,password?:string) {
this.service.login.id=id;
this.service.login.gmail=email;
this.service.login.password=password;
    if(window.confirm("Aru you Sure that You Want to Delete your WALLET...!!!!")){
      this.repo.deleteWallet().subscribe(
        {
          next:(data)=>{
            window.alert("Wallet Deleted and Good BYE....!");
            this.ngOnInit();},
          error:(error)=>{window.alert(JSON.stringify(error));},
          complete:()=>{}
        }
      )
    }
  }

  update(wallet:WalletDto) {
    if (typeof wallet.id === "number") {
      this.service.walletMap.set(wallet.id, wallet);
    }
    this.service.login.id = wallet.id;
    this.service.login.gmail=wallet.eMail;
    this.service.login.password=wallet.password;
          this.route.navigate(['admin-update']);
  }
}
