import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReceptionistComponent } from './home-receptionist.component';

describe('HomeReceptionistComponent', () => {
  let component: HomeReceptionistComponent;
  let fixture: ComponentFixture<HomeReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeReceptionistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
