import { Component } from '@angular/core';
import {WalletDto} from "./dto/WalletDto";
import {Router} from "@angular/router";
import {WalletDbServiceService} from "./components/service/wallet-db-service.service";
import {ServiceComponent} from "./components/service/service.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title="WalletAppH2";
 constructor(private router:Router,private walletdb:WalletDbServiceService,private service:ServiceComponent) {
 }
 login(){

   this.walletdb.postlogin().subscribe({
     next:(data)=>{
       console.log(data);
       this.service.addWallet(data);
       this.router.navigate(['/user/mypage']);
     },
     error:(error)=>{
       window.alert("Session Expired");
       console.log(JSON.stringify(error));
       this.router.navigate(['/Login']);
     },
     complete:()=>{
       console.log("request done");
     }
   })

   // this.router.navigate(['/Login']);


 }

}
