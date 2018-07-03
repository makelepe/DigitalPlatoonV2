import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../service/invoice.service';
import { Invoice } from '../model/invoice';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Digital Platoon';
  public invoice: Invoice;
  public invoices: Invoice[] = [];

  constructor(private invoiceService: InvoiceService,private router: Router) { 
    this.viewAllInvoices();
  }

  ngOnInit() {
  }

   viewAllInvoices () {
     this.invoices = [];

     this.invoiceService.viewAllInvoices().subscribe(result => {
       var json = result.json();
       for (var i=0; i<json.length; i++) {
        this.invoice = new Invoice( json[i].id, 
                                        json[i].client, 
                                        json[i].vatRate, 
                                        json[i].invoiceDate, 
                                        json[i].lineItems, 
                                        json[i].vat, 
                                        json[i].subTotal, 
                                        json[i].total);
        this.invoices.push (this.invoice);
        console.log("invoice client ::" + this.invoice.client);
      }
      console.log("invoices fetched ::" + this.invoices.length);
    }, error => console.error(error));
   }

   viewInvoice(invoice) {
      localStorage.setItem("invoiceId", invoice.id.toString());
      this.router.navigate(['view-invoice']);
      console.log("view invoice :: " + invoice.id);
   }

   addInvoice(): void {
    this.router.navigate(['add-invoice']);
    console.log("add new invoice");
  };

}
