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
import { OpacHeaderComponent } from './opac/header/header.component';
import { LogService } from './opac/services/opac.service.log';
import { AccountService } from './opac/services/opac.service.account';
import { InactiveUsersComponent } from './opac/admin/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './opac/admin/active-users/active-users.component';
import { OpacAdminComponent } from './opac/admin/admin.component';
import { OpComponent } from './opac/op/op.component';
import { AssetInfoComponent } from './opac/asset-info/asset-info.component';
import { AoeComponent } from './opac/op/aoe/aoe.component';
import { GoeComponent } from './opac/op/goe/goe.component';
import { MockupComponent } from './opac/op/mockup/mockup.component';
import { AuthMaintncComponent } from './opac/op/auth-maintnc/auth-maintnc.component';
import { FiExportComponent } from './opac/op/fi-export/fi-export.component';
import { AcctTransferComponent } from './opac/transfer/acct-transfer/acct-transfer.component';
import { TransferListComponent } from './opac/transfer/transfer-list/transfer-list.component';
import { GrpComponent } from './opac/lookup/grp/grp.component';
import { TransferComponent } from './opac/transfer/transfer.component';
import { AccountListComponent } from './opac/lookup/account/account-list/account-list.component';
import { OpacHeaderComponentTwo } from './opac/opac-header/opac-header.component';
import { LookupComponent } from './opac/lookup/lookup.component';
import { ReportComponent } from './opac/lookup/report/report.component';
import { AddUserComponent } from './opac/admin/add-user/add-user.component';
import { OrderComponent } from './opac/op/order/order.component';

//1. Add Path and components. Dont put / in path
const approutes: Routes = [
  //------eop op------
  { path: '', component: OpComponent },
  {
    path: 'eop-op', component: OpComponent,
    children: [
      { path: 'mkp', component: MockupComponent },
      { path: 'am', component: AuthMaintncComponent },
      { path: 'fi', component: FiExportComponent },
      // { path: 'om', component: OrderComponent },
      {
        path: 'om', component: OrderComponent,
        children: [
          { path: 'aoe', component: AoeComponent },
          { path: 'goe', component: GoeComponent }
        ]
      },
      
    ]
  },

  //------eop t------
  {
    path: 'eop-t', component: TransferComponent,
    children: [
      { path: '', component: TransferListComponent }, //default component when no link initially clicked.
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

    ]
  },

  //------eop inquiry------
  {
    path: 'eop-lkp', component: LookupComponent,
    children: [
      { path: '', component: AccountComponent },
      { path: 'account', component: AccountComponent },
      { path: 'asset', component: AssetComponent },
      { path: 'grp', component: GrpComponent },
      { path: 'rpt', component: ReportComponent },
    ]
  },

  //------eop admin------
  {
    path: 'eop-adm', component: OpacAdminComponent,
    children: [
      { path: '', component: ActiveUsersComponent },
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
    OpacHeaderComponent, OpacHeaderComponentTwo,
    ActiveUsersComponent,
    InactiveUsersComponent,
    OpacAdminComponent,
    OpComponent,
    AssetInfoComponent,
    AoeComponent,
    GoeComponent,
    MockupComponent,
    AuthMaintncComponent,
    FiExportComponent,
    AcctTransferComponent,
    TransferListComponent,
    GrpComponent,
    TransferComponent,
    AccountListComponent,
    LookupComponent,
    ReportComponent,
    AddUserComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes) //2. Add routerModule Register path at RouterModule //3. Add respective import
  ],
  providers: [AccountService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
