import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WalletDbServiceService} from "../../service/wallet-db-service.service";

@Component({
  selector: 'app-delete-wallet',
  templateUrl: './delete-wallet.component.html',
  styleUrls: ['./delete-wallet.component.css']
})
export class DeleteWalletComponent {
  constructor(private route:ActivatedRoute,private router:Router,private walletdbService:WalletDbServiceService) {
  }
       deleteWallet(){

          if(window.confirm("Aru you Sure that You Want to Delete your WALLET...!!!!")){
            this.walletdbService.deleteWallet().subscribe(
              {
                next:(data)=>{
                   window.alert("Wallet Deleted and Good BYE....!");
                },
                error:(error)=>{
                  window.alert(JSON.stringify(error));
                },
                complete:()=>{
                  window.alert("Redirecting to Home Page........");
                  this.router.navigate(['/home'],{relativeTo:this.route});
              }
              }
            )
          }

       }


}
