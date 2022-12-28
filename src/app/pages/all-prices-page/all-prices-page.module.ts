import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPricesPageRoutingModule } from './all-prices-page-routing.module';
import { AllPricesPageComponent } from './all-prices-page/all-prices-page.component';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';

@NgModule({
  declarations: [AllPricesPageComponent],
  imports: [CommonModule, AllPricesPageRoutingModule, DataTableModule],
})
export class AllPricesPageModule {}
