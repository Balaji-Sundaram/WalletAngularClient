import {Component, Injectable} from '@angular/core';
import {LoginDto} from "../../dto/LoginDto";
import {ServiceComponent} from "../service/service.component";
import {Router} from "@angular/router";
import {WalletDto} from "../../dto/WalletDto";
import {WalletDbServiceService} from "../service/wallet-db-service.service";
import {popNumber} from "rxjs/internal/util/args";
import {Observable} from "rxjs";
import {UserComponentComponent} from "../user-component/user-component.component";



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
  constructor(private service:ServiceComponent, private walletdbService:WalletDbServiceService,private router:Router,private user:UserComponentComponent) {
  }
  getWallet(){
    console.log(JSON.stringify(this.login));
         //  this.walletdbService.getWallet(this.login.gmail,this.login.password,this.login.id);
           let walletPost:Observable<any> = this.walletdbService.login(this.login);
           // subscribe here to observe the value
       walletPost.subscribe(
         {
           next:(data)=>{
            this.service.addWalletServ(data,this.login);  //local storage
             sessionStorage.clear();
             sessionStorage.setItem("Prime",data.jwt);
             console.log(data);} ,  // runs when the data is available
           error:(error)=>{
               let index = JSON.stringify(error).indexOf("error");
             window.alert(JSON.stringify(error).slice(index+8,-2));
             console.log(JSON.stringify(error));
             },
           complete:()=>{console.log("GET request successfully");
             // @ts-ignore
             this.router.navigate(['user']);
           }}
       )



  }



}
