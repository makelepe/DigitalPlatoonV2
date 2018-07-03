import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HttpModule } from '@angular/http';
import {InvoiceService} from "./service/invoice.service";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddInvoiceComponent,
    ViewInvoiceComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule, HttpModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
