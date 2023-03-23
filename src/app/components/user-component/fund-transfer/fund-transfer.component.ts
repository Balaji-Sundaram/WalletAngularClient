import {Component, OnInit} from '@angular/core';
import {WalletDto} from "../../../dto/WalletDto";
import {WalletDbServiceService} from "../../service/wallet-db-service.service";
import {ServiceComponent} from "../../service/service.component";
import {Observable} from "rxjs";
import {FundTfrGuard} from "./FundTfrGuard";

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit{
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

pin:number=0;
  toID:number=0;
  amount:number=0;
  fundtransfer(){
    let wallet:Observable<any> = this.walletdbService.fundTransfer(this.id,this.toID,this.pin,this.amount);
    wallet.subscribe(
      {
        next:(data)=>{console.log(data);},
        error:(error)=>{
         let index = JSON.stringify(error).indexOf("error");
         window.alert(JSON.stringify(error).slice(index+8,-2))
          console.log(JSON.stringify(error));
          },
        complete:()=>{
          window.alert("Funds Transfered");
          console.log("Funds Transfered");
          // @ts-ignore
          let amt:number = this.service.walletMap.get(this.id).balance ;
          // @ts-ignore
          this.service.walletMap.get(this.id).balance = amt-this.amount;
        }
      }
    )

  }

}
