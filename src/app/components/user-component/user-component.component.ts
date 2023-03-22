import {Component, Injectable, Input, OnInit} from '@angular/core';
import {WalletDto} from "../../dto/WalletDto";
import {ServiceComponent} from "../service/service.component";
import {LoginComponent} from "../login/login.component";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {WalletDbServiceService} from "../service/wallet-db-service.service";
import {style} from "@angular/animations";

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
@Injectable({
  providedIn:'root'
})

export class UserComponentComponent implements OnInit {
  Walletmap = new Map<number,WalletDto>();
  // @ts-ignore
  walletdto = Array.from(this.Walletmap.values());
  constructor(private activatedRoute:ActivatedRoute,private walletdbservice:WalletDbServiceService,private service:ServiceComponent,private router:Router) {
  }
userName:string="";
  ngOnInit():void {
    this.Walletmap = this.service.getAllWallet();
    this.walletdto = Array.from(this.Walletmap.values());
    // @ts-ignore
    this.userName=this.walletdto.pop().name
    this.Walletmap = this.service.getAllWallet();
    this.walletdto = Array.from(this.Walletmap.values());
    console.log(this.Walletmap)
    this.router.navigate(['mypage'],{relativeTo:this.activatedRoute});

  }
//
//   mypage(){
//         this.router.navigate(['mypage'],{relativeTo:this.activatedRoute});
//   }
//   addFunds(){
//     this.router.navigate(['addFunds'],{relativeTo:this.activatedRoute});
// }
//   fundTransfer(){
//     this.router.navigate(['fundTransfer'],{relativeTo:this.activatedRoute});
//   }
//   deleteWallet(){
//     this.router.navigate(['deleteWallet'],{relativeTo:this.activatedRoute});
//   }
//   updateWallet(){
//     this.router.navigate(['updateWallet'],{relativeTo:this.activatedRoute});
//   }
//   withDraw(){
//     this.router.navigate(['withDraw'],{relativeTo:this.activatedRoute});
//   }
  logout(){
    if(window.confirm("Aru you Sure that You Want to LOGOUT...!")) {
      sessionStorage.clear();
      this.service.deletetrace();
      this.router.navigate(['Login']);
    }

  }


}
