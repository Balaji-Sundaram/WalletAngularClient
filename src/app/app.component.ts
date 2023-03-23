import { Component } from '@angular/core';
import {WalletDto} from "./dto/WalletDto";
import {Router} from "@angular/router";
import {WalletDbServiceService} from "./components/service/wallet-db-service.service";
import {ServiceComponent} from "./components/service/service.component";
import {UserGuard} from "./components/user-component/UserGuard";
import {WithDrawGuard} from "./components/user-component/with-draw/WithDrawGuard";
import {UpdateGuard} from "./components/user-component/update-wallet/UpdateGuard";
import {FundTfrGuard} from "./components/user-component/fund-transfer/FundTfrGuard";
import {AddGuard} from "./components/user-component/add-funds/AddGuard";
import {DeleteGuard} from "./components/user-component/delete-wallet/DeleteGuard";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title="WalletAppH2";
 constructor(private router:Router,private walletdb:WalletDbServiceService,private service:ServiceComponent,private userguard:UserGuard,private withDrawGuard:WithDrawGuard
             ,private updateGuared:UpdateGuard,private fundTfrGuard:FundTfrGuard,private addGuard:AddGuard,private deleteGuard:DeleteGuard
 ) {
 }
 login(){

   this.walletdb.postlogin().subscribe({
     next:(data)=>{
       console.log(data);
       this.service.addWallet(data);
       this.userguard.bool=true;
       this.withDrawGuard.bool=true;
       this.updateGuared.bool=true;
       this.fundTfrGuard.bool=true;
       this.addGuard.bool=true;
       this.deleteGuard.bool=true;
       window.alert("Redirecting to Your Page.......")
       this.router.navigate(['/user/mypage']);
     },
     error:(error)=>{
       // window.alert("Session Expired");
       console.log(JSON.stringify(error));
       this.router.navigate(['/Login']);
     },
     complete:()=>{
       console.log("request done");
     }
   })
 }

}
