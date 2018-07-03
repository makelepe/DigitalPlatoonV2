import { LineItem } from "./line-item";

export class Invoice {
    public id: number;
    public client: string;
    public vatRate: number;
    public invoiceDate: Date;
    public lineItems: LineItem[];
  
    // calculated
    public vat: number;
    public subTotal: number;
    public total: number;
  
  
    constructor ( 
          id: number, 
          client: string,
          vatRate: number,
          invoiceDate: Date,
          lineItems: LineItem[],
          vat: number,
          subTotal: number,
          total: number) 
    {
  
      this.id = id;
      this.client = client;
      this.vatRate = vatRate;
      this.invoiceDate = invoiceDate;
      this.lineItems = lineItems;
  
      this.vat = vat;
      this.subTotal = subTotal;
      this.total = total;
    }
  
  }
  
