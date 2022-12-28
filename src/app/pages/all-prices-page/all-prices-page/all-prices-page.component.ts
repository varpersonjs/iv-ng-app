import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-all-prices-page',
  templateUrl: './all-prices-page.component.html',
  styleUrls: ['./all-prices-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPricesPageComponent {
  public allPrices$ = this.dataService.getAllPrices();

  constructor(private dataService: DataService) {}
}
