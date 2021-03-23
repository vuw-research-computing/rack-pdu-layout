import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PduFormComponent } from './pdu-form.component';

describe('PduFormComponent', () => {
  let component: PduFormComponent;
  let fixture: ComponentFixture<PduFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PduFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PduFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
