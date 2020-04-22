import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetSelectorPageComponent } from './sheet-selector-page.component';

describe('SheetSelectorPageComponent', () => {
  let component: SheetSelectorPageComponent;
  let fixture: ComponentFixture<SheetSelectorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetSelectorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetSelectorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
