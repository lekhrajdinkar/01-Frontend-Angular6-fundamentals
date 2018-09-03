import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoeComponent } from './goe.component';

describe('GoeComponent', () => {
  let component: GoeComponent;
  let fixture: ComponentFixture<GoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
