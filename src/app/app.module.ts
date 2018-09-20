import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListItemComponent } from './recipe/recipe-list/recipe-list-item/recipe-list-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FooterComponent } from './footer/footer.component';
import { Basic1Directive } from './directives/basic-1.directive';
import { Dropdown1Directive } from './directives/dropdown1.directive';
import { AssetComponent } from './opac/lookup/asset/asset.component';
import { AccountComponent } from './opac/lookup/account/account.component';
import { OpacComponent } from './opac/opac.component';
import { NewAccountComponent } from './opac/lookup/account/new-account/new-account.component';
import { LogService } from './opac/services/opac.service.log';
import { AccountService } from './opac/services/opac.service.account';
import { InactiveUsersComponent } from './opac/admin/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './opac/admin/active-users/active-users.component';
import { OpacAdminComponent } from './opac/admin/admin.component';
import { OpComponent } from './opac/op/op.component';
import { AssetInfoComponent } from './opac/asset-info/asset-info.component';
import { AcctTransferComponent } from './opac/transfer/acct-transfer/acct-transfer.component';
import { TransferListComponent } from './opac/transfer/transfer-list/transfer-list.component';

import { TransferComponent } from './opac/transfer/transfer.component';
import { AccountListComponent } from './opac/lookup/account/account-list/account-list.component';
import { OpacHeaderComponentTwo } from './opac/opac-header/opac-header.component';
import { LookupComponent } from './opac/lookup/lookup.component';
import { ReportComponent } from './opac/lookup/report/report.component';
import { AddUserComponent } from './opac/admin/add-user/add-user.component';
import { OrderComponent } from './opac/op/order/order.component';
import { AssetListComponent } from './opac/lookup/asset/asset-list/asset-list.component';
import { AssetListItemComponent } from './opac/lookup/asset/asset-list-item/asset-list-item.component';
import { AssetEditComponent } from './opac/lookup/asset/asset-edit/asset-edit.component';
import { AssetDetailComponent } from './opac/lookup/asset/asset-detail/asset-detail.component';
import { LoginComponent } from './opac/login/login.component';
import { opacGaurd } from 'src/app/opac/opac-gaurd.service';
import { PipesComponent } from './opac/asset-info/pipes/pipes.component';
import { Pipe1Pipe } from './opac/asset-info/pipes/pipe1.pipe';

//1. Add Path and components. Dont put / in path
const approutes: Routes = [
  //------eop op------
  { path: 'login/:method', component:LoginComponent },
  { path: '', redirectTo: 'login/signin', pathMatch: 'full' },

  {
    path: 'eop-op', component: OpComponent, 
    children: [
      { path: '', redirectTo: 'om', pathMatch: 'full' },
     
       {
        path: 'om', component: OrderComponent,
        children: [
          { path: '', redirectTo: 'aoe', pathMatch: 'full' }
        ]
      },

    ]
  },

  //------eop t------
  {
    path: 'eop-t', component: TransferComponent,
    children: [
      { path: '', redirectTo: 'acct-transfer', pathMatch: 'full' }, //default component when no link initially clicked.
      { path: 'transfer-list', component: TransferListComponent },
      { path: 'acct-transfer', component: AcctTransferComponent },
      { path: 'transfer-list/:id', component: TransferListComponent },
      { path: 'servers/:serverId/create', component: ServersComponent },
      { path: 'recipe', component: RecipeComponent },
      { path: 'shopping', component: ShoppingListComponent },
      { path: 'servers', component: ServersComponent },
    ]
  },

  //------eop asset info------
  {
    path: 'eop-asset-info', component: AssetInfoComponent,
    children: [
      { path: '', redirectTo: 'pipes-demo', pathMatch: 'full' }, //default component when no link initially clicked.
      { path: 'pipes-demo', component: PipesComponent },
    ]
  },

  //------4. Angular Forms------
  {
    path: 'ng6-forms', component: LookupComponent,
    children: [
      { path: '', redirectTo: 'td-1', pathMatch: 'full' },

      { path: 'td-1', component: ReportComponent },

      { path: 'r-1', component: ReportComponent },

      { path: 'account', component: AccountComponent },

      {
        path: 'asset', component: AssetComponent, children: [
          { path: '', redirectTo:'0' ,pathMatch: 'full' },
          { path: 'new', component: AssetEditComponent},
          { path: ':index', component: AssetDetailComponent, 
          children:[
            {path:'edit', component :AssetEditComponent},
            {path:'delete/:i', component :AssetListItemComponent},
          ] }
        ]
      }
    ]
  },

  //------eop admin------
  {
    path: 'eop-adm', component: OpacAdminComponent,
    children: [
      { path: '', redirectTo: 'add-user', pathMatch: 'full' },
      { path: 'active-users', component: ActiveUsersComponent },
      { path: 'inactive-users', component: InactiveUsersComponent },
      { path: 'add-user', component: AddUserComponent },

    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    RecipeComponent,
    RecipeListComponent,
    HeaderComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    FooterComponent,
    Basic1Directive,
    Dropdown1Directive,
    AssetComponent,
    AccountComponent,
    OpacComponent,
    NewAccountComponent,
    OpacHeaderComponentTwo,
    ActiveUsersComponent,
    InactiveUsersComponent,
    OpacAdminComponent,
    OpComponent,
    AssetInfoComponent,
    AcctTransferComponent,
    TransferListComponent,
    TransferComponent,
    AccountListComponent,
    LookupComponent,
    ReportComponent,
    AddUserComponent,
    OrderComponent,
    AssetListComponent,
    AssetListItemComponent,
    AssetEditComponent,
    AssetDetailComponent,
    LoginComponent,
    PipesComponent,
    Pipe1Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes) //2. Add routerModule Register path at RouterModule //3. Add respective import
  ],
  providers: [AccountService, LogService, opacGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
