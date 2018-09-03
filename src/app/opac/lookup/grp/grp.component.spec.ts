import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpComponent } from './grp.component';

describe('GrpComponent', () => {
  let component: GrpComponent;
  let fixture: ComponentFixture<GrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
