import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMaintncComponent } from './auth-maintnc.component';

describe('AuthMaintncComponent', () => {
  let component: AuthMaintncComponent;
  let fixture: ComponentFixture<AuthMaintncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthMaintncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMaintncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
