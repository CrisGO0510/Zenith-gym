import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTrainingReservationComponent } from './dialog-training-reservation.component';

describe('DialogTrainingReservationComponent', () => {
  let component: DialogTrainingReservationComponent;
  let fixture: ComponentFixture<DialogTrainingReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogTrainingReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTrainingReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
