import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";
import { InvoiceService } from '../service/invoice.service';
import { Invoice } from '../model/invoice';
import { LineItem } from '../model/line-item';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  public invoice: Invoice;
  public lineItems: LineItem[] = [];

  constructor(private invoiceService: InvoiceService,private router: Router) { }
  
  ngOnInit() {
    this.invoice = new Invoice(null,null,null,null,null,null,null,null);
  }

  addInvoice (client, vatRate, invoiceDate) {
    
    this.invoice = new Invoice( null, client, vatRate, invoiceDate, this.lineItems, 0, 0, 0);


    this.invoiceService.addInvoice(this.invoice).subscribe(result => {
      var json = result.json();

      this.invoice = new Invoice( json.id, 
                                  json.client, 
                                  json.vatRate, 
                                  json.invoiceDate, 
                                  json.lineItems, 
                                  json.vat, 
                                  json.subTotal, 
                                  json.total);
      console.log ("added invoice (id="+json.id+", client="+json.client+") successfully!");
      localStorage.setItem("successMsg", "added invoice (id="+json.id+", client="+json.client+") successfully!");
    }, error => console.error(error)); 

    this.router.navigate(['main']);
  }


  addLineItem (_quantity,_description,_unitPrice) {
    let lineItem: LineItem = new LineItem(null,_quantity,_description,_unitPrice,(_quantity*_unitPrice));
    this.lineItems.push(lineItem);
    console.log("added line item!");
  }


}
