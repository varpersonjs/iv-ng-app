import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPricesPageComponent } from './all-prices-page.component';

describe('AllPricesPageComponent', () => {
  let component: AllPricesPageComponent;
  let fixture: ComponentFixture<AllPricesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPricesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPricesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
