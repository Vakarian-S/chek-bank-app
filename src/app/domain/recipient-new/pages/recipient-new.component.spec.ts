import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientNewComponent } from './recipient-new.component';

describe('RecipientNewComponent', () => {
  let component: RecipientNewComponent;
  let fixture: ComponentFixture<RecipientNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
