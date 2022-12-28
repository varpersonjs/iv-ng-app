import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastPricesPageRoutingModule } from './last-prices-page-routing.module';
import { LastPricesPageComponent } from './last-prices-page/last-prices-page.component';
import { LiveUpdateModule } from 'src/app/shared/live-update/live-update.module';

@NgModule({
  declarations: [LastPricesPageComponent],
  imports: [CommonModule, LastPricesPageRoutingModule, LiveUpdateModule],
})
export class LastPricesPageModule {}
