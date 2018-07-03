import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Invoice } from '../model/invoice';
import { LineItem } from '../model/line-item';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {
  public invoice: Invoice;
  public lineItems: LineItem[] = [];

  constructor(private invoiceService: InvoiceService,private router: Router) { }

  ngOnInit() {
    let invoiceId = localStorage.getItem("invoiceId");
    if(!invoiceId) {
      alert("Invalid action.")
      this.router.navigate(['main']);
      return;
    }
    this.viewInvoice (invoiceId);
  }

  close () {
    this.router.navigate(['main']);
  }

  viewInvoice (invoiceId) {
    console.log("view invoice called ::" + invoiceId);
    this.invoiceService.viewInvoice(invoiceId).subscribe(result => {
      var json = result.json();
      this.invoice = new Invoice( json.id, 
                                  json.client, 
                                  json.vatRate, 
                                  json.invoiceDate, 
                                  json.lineItems, 
                                  json.vat, 
                                  json.subTotal, 
                                  json.total);
        this.lineItems = json.lineItems;
        console.log ("view invoice (id="+json.id+", client="+json.client+") from service!");
    }, error => console.error(error)); 
  }

}
