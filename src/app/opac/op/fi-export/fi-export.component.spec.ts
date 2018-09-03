import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiExportComponent } from './fi-export.component';

describe('FiExportComponent', () => {
  let component: FiExportComponent;
  let fixture: ComponentFixture<FiExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
