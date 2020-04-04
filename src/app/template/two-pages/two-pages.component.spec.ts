import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPagesComponent } from './two-pages.component';

describe('TwoPagesComponent', () => {
  let component: TwoPagesComponent;
  let fixture: ComponentFixture<TwoPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
