import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaetButtonComponent } from './raet-button.component';

describe('RaetButtonComponent', () => {
  let component: RaetButtonComponent;
  let fixture: ComponentFixture<RaetButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaetButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
