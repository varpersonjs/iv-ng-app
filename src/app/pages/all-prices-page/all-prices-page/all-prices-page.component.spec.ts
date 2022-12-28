import { DataService } from 'src/app/services/data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPricesPageComponent } from './all-prices-page.component';
import { of } from 'rxjs';

describe('AllPricesPageComponent', () => {
    let component: AllPricesPageComponent;
    let fixture: ComponentFixture<AllPricesPageComponent>;
    const mockedDataService = jasmine.createSpyObj('DataService', ['getAllPrices']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                {
                    provide: DataService,
                    useValue: mockedDataService,
                },
            ],
            declarations: [AllPricesPageComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(AllPricesPageComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        mockedDataService.getAllPrices.and.returnValue(of([]));
        expect(component).toBeTruthy();
    });
});
