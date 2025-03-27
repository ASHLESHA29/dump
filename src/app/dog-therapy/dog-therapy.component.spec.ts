import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogTherapyComponent } from './dog-therapy.component';

describe('DogTherapyComponent', () => {
  let component: DogTherapyComponent;
  let fixture: ComponentFixture<DogTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogTherapyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
