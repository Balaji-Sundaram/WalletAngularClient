import { Component } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css']
})
export class AdminLogComponent {
  constructor(private route:ActivatedRoute,private router:Router) {
  }
  uname:String="";
  password:string="";
  admin(){
        if(this.uname.includes("admin")   &&   this.password.includes("admin")){
          this.router.navigate(['/display'],{relativeTo:this.route});
        }
  }
}
