import {Component, Injectable, OnInit} from '@angular/core';
import {WalletDto} from "../../../dto/WalletDto";
import {ServiceComponent} from "../../service/service.component";
import {WalletDbServiceService} from "../../service/wallet-db-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})

export class AdminUpdateComponent implements OnInit{
  id:number | undefined=0;

  walletdto:WalletDto[] =[];
  wallet:WalletDto= new WalletDto();
  ngOnInit(): void {
    this.walletdto = Array.from(this.service.getAllWallet().values());
    // @ts-ignore
    this.wallet=this.walletdto.at(0);
    this.id= this.wallet.id;
  }

  constructor(private service:ServiceComponent, private walletdbservice:WalletDbServiceService,private router:Router ) {
  }
  // @ts-ignore
  mail:string=this.wallet.eMail;



  adupdate(){
    let updatewallet:Observable<any> = this.walletdbservice.updateWallet(this.wallet);
    console.log(this.mail);
    updatewallet.subscribe(
      {
        next:(data)=>{
          console.log(data);
        },
        error:(error)=>{
          let index = JSON.stringify(error).indexOf("error");
          window.alert(JSON.stringify(error).slice(index+8,-2))
          console.log(JSON.stringify(error));
        },
        complete:()=>{
          console.log("Wallet Updated Successfully");
          window.alert("Wallet Updated Successfully  ");
          this.service.login.gmail=this.wallet.eMail;
          this.service.login.password=this.wallet.password;   // use to set the login credential, so we can update so many times in a single Login
        }
      }
    )




  }
back(){
  this.router.navigate(['display']);
}
}
