import {Component, Injectable} from '@angular/core';
import {LoginDto} from "../../dto/LoginDto";
import {ServiceComponent} from "../service/service.component";
import {Router} from "@angular/router";
import {WalletDto} from "../../dto/WalletDto";
import {WalletDbServiceService} from "../service/wallet-db-service.service";
import {popNumber} from "rxjs/internal/util/args";
import {Observable} from "rxjs";
import {UserComponentComponent} from "../user-component/user-component.component";
import {UserGuard} from "../user-component/UserGuard";
import {WithDrawGuard} from "../user-component/with-draw/WithDrawGuard";
import {UpdateGuard} from "../user-component/update-wallet/UpdateGuard";
import {FundTfrGuard} from "../user-component/fund-transfer/FundTfrGuard";
import {AddGuard} from "../user-component/add-funds/AddGuard";
import {DeleteGuard} from "../user-component/delete-wallet/DeleteGuard";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  login:LoginDto={
    id:undefined,
    gmail:"",
    password:"",
  };
  constructor(private service:ServiceComponent, private walletdbService:WalletDbServiceService,private router:Router,private user:UserComponentComponent,private userguard:UserGuard,private withDrawGuard:WithDrawGuard
    ,private updateGuared:UpdateGuard,private fundTfrGuard:FundTfrGuard,private addGuard:AddGuard,private deleteGuard:DeleteGuard) {
  }
  getWallet(){

    sessionStorage.clear();
    console.log(JSON.stringify(this.login));
           let walletPost:Observable<any> = this.walletdbService.login(this.login);
           // subscribe here to observe the value
       walletPost.subscribe(
         {
           next:(data)=>{
            this.service.addWalletServ(data,this.login);  //local storage
             sessionStorage.clear();
             sessionStorage.setItem("Prime",data.jwt);
             this.userguard.bool=true;
             this.withDrawGuard.bool=true;
             this.updateGuared.bool=true;
             this.fundTfrGuard.bool=true;
             this.addGuard.bool=true;
             this.deleteGuard.bool=true;
             this.router.navigate(['/user/mypage']);
             console.log(data);} ,  // runs when the data is available
           error:(error)=>{
               let index = JSON.stringify(error).indexOf("error");
             window.alert(JSON.stringify(error).slice(index+8,-2));
             console.log(JSON.stringify(error));
             },
           complete:()=>{console.log("GET request successfully");
             // @ts-ignore
             // this.router.navigate(['user']);
           }}
       )



  }



}
