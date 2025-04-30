import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministrativeComponent } from './home-administrative.component';

describe('HomeAdministrativeComponent', () => {
  let component: HomeAdministrativeComponent;
  let fixture: ComponentFixture<HomeAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAdministrativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
