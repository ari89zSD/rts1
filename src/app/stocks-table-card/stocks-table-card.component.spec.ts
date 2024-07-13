import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksTableCardComponent } from './stocks-table-card.component';

describe('StocksTableCardComponent', () => {
  let component: StocksTableCardComponent;
  let fixture: ComponentFixture<StocksTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksTableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
