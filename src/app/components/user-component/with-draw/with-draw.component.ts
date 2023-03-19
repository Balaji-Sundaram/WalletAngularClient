import {Component, OnInit} from '@angular/core';
import {WalletDbServiceService} from "../../service/wallet-db-service.service";
import {ServiceComponent} from "../../service/service.component";
import {WalletDto} from "../../../dto/WalletDto";
import {Observable} from "rxjs";

@Component({
  selector: 'app-with-draw',
  templateUrl: './with-draw.component.html',
  styleUrls: ['./with-draw.component.css']
})
export class WithDrawComponent implements OnInit{
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
  amount:number=0;
  withdraw() {
      let wallet: Observable<any> = this.walletdbService.withDraw(this.id, this.pin, this.amount);
      wallet.subscribe(
        {
          next: (data) => {
            console.log(data);
          },
          error: (error) => {
            let index = JSON.stringify(error).indexOf("error");
            window.alert(JSON.stringify(error).slice(index+8,-2))
            console.log(JSON.stringify(error));
          },
          complete: () => {
            window.alert("Funds Withdraw Successfully");
            console.log("Funds Withdraw Successfully");
            // @ts-ignore
            let amt: number = this.service.walletMap.get(this.id).balance;
            // @ts-ignore
            this.service.walletMap.get(this.id).balance = amt - this.amount;
          }
        }
      )

    }

}
