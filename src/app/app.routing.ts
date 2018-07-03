import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'add-invoice', component: AddInvoiceComponent },
  { path: 'view-invoice', component: ViewInvoiceComponent },
  {path : '', component : MainComponent}
];

export const routing = RouterModule.forRoot(routes);