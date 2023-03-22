import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {WalletDbServiceService} from "../../service/wallet-db-service.service";
import {ServiceComponent} from "../../service/service.component";

@Injectable({
  providedIn:'root'
})
export class WithDrawGuard implements CanActivate{
  constructor(private route:ActivatedRoute,private router:Router,private walletdb:WalletDbServiceService,private service:ServiceComponent) {
  }
  bool:boolean=false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.bool){
      return true;
    }
    else{

      this.walletdb.postlogin().subscribe({
        next:(data)=>{
          console.log(data);
          this.service.addWallet(data);
          this.bool=true;
          this.router.navigateByUrl('/user/withDraw');
          return true;
        },
        error:(error)=>{
          window.alert("Session Expired");
          console.log(JSON.stringify(error));
          this.router.navigate(['/Login']);
          return false;
        },
        complete:()=>{
          console.log("request done");
          return true;
        }
      })
      return false;
    }
  }
}