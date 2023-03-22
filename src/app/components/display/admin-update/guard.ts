import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn:'root'
})
export class DisplayGuard implements CanActivate{
  constructor(private route:ActivatedRoute,private router:Router ) {
  }
  bool:boolean=false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
  if(this.bool){
    return true;
  }
  else{
    this.router.navigate(['/admin-log'],{relativeTo:this.route});
    window.alert("You are Not an Admin..!");
    return false;
  }
  }

}
