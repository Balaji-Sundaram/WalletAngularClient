import {Component, Injectable, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WalletDto} from "../../../dto/WalletDto";
import {ActivatedRoute, Router} from "@angular/router";
import {WalletDbServiceService} from "../../service/wallet-db-service.service";
import {ServiceComponent} from "../../service/service.component";

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})

export class MypageComponent implements OnInit{

  Walletmap = new Map<number,WalletDto>();
  walletdto = Array.from(this.Walletmap.values());
  id:number=0;
   // @ts-ignore
  wallet:WalletDto= this.Walletmap.get(this.id);
  constructor(private activatedRoute:ActivatedRoute,private walletdbservice:WalletDbServiceService,private service:ServiceComponent,private router:Router) {
  }

  ngOnInit() {
    this.Walletmap = this.service.getAllWallet();
    this.walletdto = Array.from(this.Walletmap.values());
    // @ts-ignore
    this.id=this.walletdto.pop().id;
    this.Walletmap = this.service.getAllWallet();
    // @ts-ignore
    this.wallet=this.Walletmap.get(this.id);
    this.walletdto = Array.from(this.Walletmap.values());
    console.log(this.Walletmap)
  }


}
