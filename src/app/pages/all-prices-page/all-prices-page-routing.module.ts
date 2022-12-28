import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllPricesPageComponent } from './all-prices-page/all-prices-page.component';

const routes: Routes = [
  {
    path: '',
    component: AllPricesPageComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AllPricesPageRoutingModule {}
