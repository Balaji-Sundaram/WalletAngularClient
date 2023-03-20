import { Component } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {DisplayGuard} from "../admin-update/guard";

@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css']
})
export class AdminLogComponent {
  constructor(private route:ActivatedRoute,private router:Router,private guard:DisplayGuard) {
  }
  uname:String="";
  password:string="";
  admin(){
        if(this.uname.includes("admin")   &&   this.password.includes("admin")){
          this.guard.bool=true;
          this.router.navigate(['/display'],{relativeTo:this.route});
        }
        else {
          window.alert("Check your Credentials....!");
        }
  }

}
