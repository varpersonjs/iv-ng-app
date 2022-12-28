import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPricesPageComponent } from './last-prices-page.component';

describe('LastPricesPageComponent', () => {
  let component: LastPricesPageComponent;
  let fixture: ComponentFixture<LastPricesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastPricesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastPricesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
