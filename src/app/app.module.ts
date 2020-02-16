import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductInfoComponent,
    PaymentRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
