import { Injectable } from '@angular/core';
import { Invoice } from '../model/invoice';
import { Config } from '../config/config';
import { Http } from '@angular/http';


@Injectable()
export class InvoiceService {
  private http: Http;
  private config: Config;
 
  constructor(http: Http) {
    this.http = http;
    this.config = new Config();
  }

  /**
   * fetch all invoices from the service
   */
  viewAllInvoices () : any {
    return this.http.get(this.config.baseUrl + 'invoices');
  }

  /**
   * fetch invoice by ID from the service 
   */
  viewInvoice (invoiceId: number): any {
    return this.http.get(this.config.baseUrl + 'invoices/'+invoiceId);
  }

  /**
   * post an Invoice to a service 
   */
  addInvoice (invoice: Invoice): any {
    return this.http.post(this.config.baseUrl + 'invoices', invoice);
  }

}
