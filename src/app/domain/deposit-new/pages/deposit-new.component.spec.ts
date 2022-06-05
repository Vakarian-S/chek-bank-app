import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositNewComponent } from './deposit-new.component';

describe('DepositNewComponent', () => {
  let component: DepositNewComponent;
  let fixture: ComponentFixture<DepositNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
