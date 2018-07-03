export class LineItem {

    public id: number;
    public quantity: number;
    public description: string;
    public unitPrice: number;
    
    // calculated
    lineItemTotal: number;

    constructor(
      id: number, 
      quantity: number,
      description: string,
      unitPrice: number,
      lineItemTotal: number) 
    {
      this.id = id;
      this.quantity = quantity;
      this.description = description;
      this.unitPrice = unitPrice;
      this.lineItemTotal = lineItemTotal;
    }

}
