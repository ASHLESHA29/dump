import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyTreatmentComponent } from './beauty-treatment.component';

describe('BeautyTreatmentComponent', () => {
  let component: BeautyTreatmentComponent;
  let fixture: ComponentFixture<BeautyTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyTreatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
