import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn:'root'
})
export class DisplayGuard implements CanActivate{
  bool:boolean=false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
  if(this.bool){
    return true;
  }
  else{
    window.alert("You are Not an Admin..!");
    return false;
  }
  }

}
