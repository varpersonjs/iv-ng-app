import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Instrument } from 'src/app/services/api.service';

@Component({
  selector: 'app-last-prices-page',
  templateUrl: './last-prices-page.component.html',
  styleUrls: ['./last-prices-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastPricesPageComponent {
  public instrument: typeof Instrument = Instrument;
}
