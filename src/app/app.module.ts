import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CreateComponent } from './components/Create/create.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';

import { DisplayComponent } from './components/display/display.component';
import { SearchPipesComponent } from './components/pipes/search.pipes.component';
import {HttpClientModule} from '@angular/common/http';
 import {UserComponentComponent} from "./components/user-component/user-component.component";
import { UpdateWalletComponent } from './components/user-component/update-wallet/update-wallet.component';
import { DeleteWalletComponent } from './components/user-component/delete-wallet/delete-wallet.component';
import { FundTransferComponent } from './components/user-component/fund-transfer/fund-transfer.component';
import { WithDrawComponent } from './components/user-component/with-draw/with-draw.component';
import { AddFundsComponent } from './components/user-component/add-funds/add-funds.component';
import { MypageComponent } from './components/user-component/mypage/mypage.component';
import { AdminLogComponent } from './components/display/admin-log/admin-log.component';
import { AdminUpdateComponent } from './components/display/admin-update/admin-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    LoginComponent,
    HomeComponent,
    // RepositoryComponent,
    DisplayComponent,
    SearchPipesComponent,
    UserComponentComponent,
    UpdateWalletComponent,
    DeleteWalletComponent,
    FundTransferComponent,
    WithDrawComponent,
    AddFundsComponent,
    MypageComponent,
    AdminLogComponent,
    AdminUpdateComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
