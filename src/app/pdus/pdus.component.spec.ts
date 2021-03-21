import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdusComponent } from './pdus.component';

describe('PdusComponent', () => {
  let component: PdusComponent;
  let fixture: ComponentFixture<PdusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
