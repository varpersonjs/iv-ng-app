import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'all-prices', pathMatch: 'full' },
  {
    path: 'all-prices',
    loadChildren: () =>
      import('./pages/all-prices-page/all-prices-page.module').then(
        (m: any) => m.AllPricesPageModule
      ),
  },
  {
    path: 'latest-price',
    loadChildren: () =>
      import('./pages/last-prices-page/last-prices-page.module').then(
        (m: any) => m.LastPricesPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'all-prices',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
