import { DataService } from './../../../services/data.service';
import { Instrument, Price } from './../../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-live-update',
  templateUrl: './live-update.component.html',
  styleUrls: ['./live-update.component.scss'],
})
export class LiveUpdateComponent implements OnInit {
  @Input() instrument: Instrument | undefined;

  public currentPrice$: Observable<Price> | undefined;
  constructor(private dataService: DataService) {}


  ngOnInit(): void {
    this.currentPrice$ =
      this.instrument && this.dataService.getLatestPrice(this.instrument);
  }
}
