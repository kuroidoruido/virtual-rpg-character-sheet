import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetWrapperComponent } from './sheet-wrapper.component';

describe('SheetWrapperComponent', () => {
  let component: SheetWrapperComponent;
  let fixture: ComponentFixture<SheetWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
