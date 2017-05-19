import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinEventCountComponent } from './pin-event-count.component';

describe('PinEventCountComponent', () => {
  let component: PinEventCountComponent;
  let fixture: ComponentFixture<PinEventCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinEventCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinEventCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
