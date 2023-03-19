import {Component, OnInit} from '@angular/core';
import {WalletDbServiceService} from "../../service/wallet-db-service.service";
import {Observable} from "rxjs";
import {ServiceComponent} from "../../service/service.component";
import {WalletDto} from "../../../dto/WalletDto";
import {MypageComponent} from "../mypage/mypage.component";
import {LoginComponent} from "../../login/login.component";

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit{
  constructor(private walletdbService:WalletDbServiceService,private service:ServiceComponent ) {
  }
  id:number=0;
  Walletmap = new Map<number,WalletDto>();
  walletdto = Array.from(this.Walletmap.values());
  ngOnInit(): void {
    this.Walletmap = this.service.getAllWallet();
    this.walletdto = Array.from(this.Walletmap.values());
    // @ts-ignore
     this.id=this.walletdto.pop().id;
    this.Walletmap = this.service.getAllWallet();
    this.walletdto = Array.from(this.Walletmap.values());
  }


   amount:number=0;


   addfunds(){
    // window.alert("your id is :"+this.id+"  your amount is:"+this.amount);
    let wallet:Observable<any> = this.walletdbService.addfunds(this.id,this.amount);
    wallet.subscribe(
      {
        next:(data)=>{console.log(data);},
        error:(error)=>{window.alert(JSON.stringify(error));},
        complete:()=>{
          window.alert("Funds Added");
          console.log("Funds Added");
          // @ts-ignore
          let amt:number = this.service.walletMap.get(this.id).balance ;
          // @ts-ignore
          this.service.walletMap.get(this.id).balance = this.amount+amt;
     }
      }
    )


   }
}
