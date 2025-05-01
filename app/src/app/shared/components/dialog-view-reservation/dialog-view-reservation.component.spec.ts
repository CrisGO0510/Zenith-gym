import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewReservationComponent } from './dialog-view-reservation.component';

describe('DialogViewReservationComponent', () => {
  let component: DialogViewReservationComponent;
  let fixture: ComponentFixture<DialogViewReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogViewReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogViewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
