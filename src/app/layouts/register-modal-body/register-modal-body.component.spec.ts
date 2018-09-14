import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterModalBodyComponent } from './register-modal-body.component';

describe('RegisterModalBodyComponent', () => {
  let component: RegisterModalBodyComponent;
  let fixture: ComponentFixture<RegisterModalBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterModalBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterModalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
