import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateReservationComponent } from './dialog-create-reservation.component';

describe('DialogCreateReservationComponent', () => {
  let component: DialogCreateReservationComponent;
  let fixture: ComponentFixture<DialogCreateReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogCreateReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
