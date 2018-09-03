import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctTransferComponent } from './acct-transfer.component';

describe('AcctTransferComponent', () => {
  let component: AcctTransferComponent;
  let fixture: ComponentFixture<AcctTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcctTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcctTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
