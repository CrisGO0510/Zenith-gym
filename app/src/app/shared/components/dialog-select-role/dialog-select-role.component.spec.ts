import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectRoleComponent } from './dialog-select-role.component';

describe('DialogSelectRoleComponent', () => {
  let component: DialogSelectRoleComponent;
  let fixture: ComponentFixture<DialogSelectRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogSelectRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSelectRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
