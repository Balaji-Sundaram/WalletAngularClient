import { Component } from '@angular/core';
import {WalletDto} from "../../dto/WalletDto";
import {ServiceComponent} from "../service/service.component";
import {WalletDbServiceService} from "../service/wallet-db-service.service";
import {Observable} from "rxjs";
import {LoginComponent} from "../login/login.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-Create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
 error:string="Please fill it"
  title = '🤩 Create a Free Wallet Here 👇 ';
  footer = '© Copyright 2023    PRIME Wallet,    All Rights Reserved   ';
  wallet:WalletDto= new WalletDto();

  constructor(private service:ServiceComponent, private walletdbservice:WalletDbServiceService,private router:Router ) {

  }


  display(){
  // @ts-ignore
    let finder:Observable<any> = this.walletdbservice.findWalletbyId(this.wallet.id);
    finder.subscribe(
      {
        next:(data)=>{
          console.log(data);
       if(data.length==0){
            // @ts-ignore
         if(this.wallet.id.toString().length==6 && this.wallet.id != null &&this.wallet.name != null && this.wallet.eMail != null && this.wallet.password != null && this.wallet.fundTransferPin != null && this.wallet.password.length==8 && this.wallet.createdDate !=null)  {
           let walletPost: Observable<any> = this.walletdbservice.addWallet(this.wallet);   // if you want to subscribe the wallet you can add that
           walletPost.subscribe(
             {
               next:(data)=>{console.log(data);},
               error:(error)=>{
                 let index = JSON.stringify(error).indexOf("error");
                 window.alert(JSON.stringify(error).slice(index+8,-2))
                 console.log(JSON.stringify(error));
                 },
               complete:()=>{
                 window.alert("Wallet Created Successfully\n" +
                   "                      Redirecting to Login Page");
                 console.log("Posted");
                 this.router.navigate(['Login']);
               }
             }
           )
         }

         else  {
           window.alert("Check the Entered Values  \n ID not be Null \n ID must contain only 6 Digits\nPassword Must Contain Exact 8 character Includes Uppercase,LowerCase, Number")
         }

       }
       else{
         window.alert("Id Already Available");
         console.log("Id Already Available");
       }
          }
      }
    )
  };


}
