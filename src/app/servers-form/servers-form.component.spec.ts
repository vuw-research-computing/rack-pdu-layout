import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersFormComponent } from './servers-form.component';

describe('ServersFormComponent', () => {
  let component: ServersFormComponent;
  let fixture: ComponentFixture<ServersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
