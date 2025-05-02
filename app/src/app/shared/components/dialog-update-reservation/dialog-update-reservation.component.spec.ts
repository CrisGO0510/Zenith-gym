import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateReservationComponent } from './dialog-update-reservation.component';

describe('DialogUpdateReservationComponent', () => {
  let component: DialogUpdateReservationComponent;
  let fixture: ComponentFixture<DialogUpdateReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUpdateReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
