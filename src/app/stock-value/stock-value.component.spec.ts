import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockValueComponent } from './stock-value.component';

describe('StockValueComponent', () => {
  let component: StockValueComponent;
  let fixture: ComponentFixture<StockValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
