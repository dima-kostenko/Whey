import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinWheyComponent } from './protein-whey.component';

describe('ProteinWheyComponent', () => {
  let component: ProteinWheyComponent;
  let fixture: ComponentFixture<ProteinWheyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinWheyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinWheyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
