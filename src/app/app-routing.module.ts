import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./components/Create/create.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {DisplayComponent} from "./components/display/display.component";
import {UserComponentComponent} from "./components/user-component/user-component.component";
import {AddFundsComponent} from "./components/user-component/add-funds/add-funds.component";
import {DeleteWalletComponent} from "./components/user-component/delete-wallet/delete-wallet.component";
import {FundTransferComponent} from "./components/user-component/fund-transfer/fund-transfer.component";
import {UpdateWalletComponent} from "./components/user-component/update-wallet/update-wallet.component";
import {WithDrawComponent} from "./components/user-component/with-draw/with-draw.component";
import {MypageComponent} from "./components/user-component/mypage/mypage.component";
import {AdminLogComponent} from "./components/display/admin-log/admin-log.component";
import {AdminUpdateComponent} from "./components/display/admin-update/admin-update.component";
import {DisplayGuard} from "./components/display/admin-update/guard";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path: 'Create', component:CreateComponent},
  {path:'Login',component:LoginComponent},
  {path:'admin-update',component:AdminUpdateComponent},
  {
    path:'display',component:DisplayComponent,
    canActivate:[DisplayGuard]
  },
  {
    path:'admin-log',component:AdminLogComponent
    // children:[
    //   {path:'display',component:DisplayComponent}
    // ]
  },
  {
    path:'user',component:UserComponentComponent,
    children:[

      {path:'mypage',component:MypageComponent},
      {path:'addFunds',component:AddFundsComponent},
      {path:'fundTransfer',component:FundTransferComponent},
      {path:'deleteWallet',component:DeleteWalletComponent},
      {path:'updateWallet',component:UpdateWalletComponent},
      {path:'withDraw',component:WithDrawComponent}
    ]

  },



  // declare the path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents=[
//   CreateComponent,
//   LoginComponent,
//   HomeComponent,
//   DisplayComponent,
//   UserComponentComponent,
//   AddFundsComponent,
//   FundTransferComponent
// ]
