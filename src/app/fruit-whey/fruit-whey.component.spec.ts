import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitWheyComponent } from './fruit-whey.component';

describe('FruitWheyComponent', () => {
  let component: FruitWheyComponent;
  let fixture: ComponentFixture<FruitWheyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitWheyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitWheyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
