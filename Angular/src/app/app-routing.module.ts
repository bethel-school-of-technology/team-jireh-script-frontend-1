import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { CustomerregisterComponent } from './components/customerregister/customerregister.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusinessregisterComponent } from './components/businessregister/businessregister.component';
import { BusinessloginComponent } from './components/businesslogin/businesslogin.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ViewoneitemComponent } from './components/viewoneitem/viewoneitem.component';
import { PaymentComponent } from './components/payment/payment.component';
import { WomenshoesallpageComponent } from './women-shoes/womenshoesallpage/womenshoesallpage.component';
import { Womenshoes1Component } from './women-shoes/womenshoes1/womenshoes1.component';
import { Womenshoes2Component } from './women-shoes/womenshoes2/womenshoes2.component';
import { Womenshoes3Component } from './women-shoes/womenshoes3/womenshoes3.component';
import { Womenshoes4Component } from './women-shoes/womenshoes4/womenshoes4.component';
import { Womenshoes5Component } from './women-shoes/womenshoes5/womenshoes5.component';
import { Womenshoes6Component } from './women-shoes/womenshoes6/womenshoes6.component';
import { Womenshoes7Component } from './women-shoes/womenshoes7/womenshoes7.component';
import { Womenshoes8Component } from './women-shoes/womenshoes8/womenshoes8.component';
import { Womenshoes9Component } from './women-shoes/womenshoes9/womenshoes9.component';
import { Womenshoes10Component } from './women-shoes/womenshoes10/womenshoes10.component';
import { Womenshoes11Component } from './women-shoes/womenshoes11/womenshoes11.component';
import { Womenshoes12Component } from './women-shoes/womenshoes12/womenshoes12.component';
import { Womenshoes13Component } from './women-shoes/womenshoes13/womenshoes13.component';
import { Womenshoes14Component } from './women-shoes/womenshoes14/womenshoes14.component';
import { Womenshoes15Component } from './women-shoes/womenshoes15/womenshoes15.component';
import { Womenshoes16Component } from './women-shoes/womenshoes16/womenshoes16.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: CustomerloginComponent},
  { path: 'register', component: CustomerregisterComponent},
  { path: 'registerbusiness', component: BusinessregisterComponent},
  { path: 'businesslogin', component: BusinessloginComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'createitem', component: CreateComponent},
  { path: 'edititem', component: EditComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'viewoneitem', component:ViewoneitemComponent},
  { path: 'payment', component: PaymentComponent},
  {path: 'allwomenshoes', component: WomenshoesallpageComponent},
  {path: 'womenshoes1', component: Womenshoes1Component},
  {path: 'womenshoes2', component: Womenshoes2Component},
  {path: 'womenshoes3', component: Womenshoes3Component},
  {path: 'womenshoes4', component: Womenshoes4Component},
  {path:'womenshoes5', component:Womenshoes5Component},
  {path:'womenshoes6', component:Womenshoes6Component},
  {path:'womenshoes7', component:Womenshoes7Component},
  {path:'womenshoes8', component:Womenshoes8Component},
  {path:'womenshoes9', component:Womenshoes9Component},
  {path: 'womenshoes10', component:Womenshoes10Component},
  {path:'womenshoes11', component:Womenshoes11Component},
  {path:'womenshoes12', component:Womenshoes12Component},
  {path:'womenshoes13', component: Womenshoes13Component},
  {path:'womenshoes14', component:Womenshoes14Component},
  {path:'womenshoes15', component:Womenshoes15Component},
  {path:'womenshoes16', component:Womenshoes16Component},
  { path: '', redirectTo: '', pathMatch:'full'}
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),],

  exports: [RouterModule]
})
export class AppRoutingModule { }