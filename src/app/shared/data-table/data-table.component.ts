import { Price } from './../../services/api.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent implements OnInit {
  @Input() allPrices$: Observable<Price[]> | undefined;
  constructor() {}

  ngOnInit(): void {}

  trackByFn(index: number, item: Price): Price {
    return item;
  }
}
