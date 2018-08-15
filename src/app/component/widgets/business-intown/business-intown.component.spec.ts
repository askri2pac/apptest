import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessIntownComponent } from './business-intown.component';

describe('BusinessIntownComponent', () => {
  let component: BusinessIntownComponent;
  let fixture: ComponentFixture<BusinessIntownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessIntownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessIntownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
