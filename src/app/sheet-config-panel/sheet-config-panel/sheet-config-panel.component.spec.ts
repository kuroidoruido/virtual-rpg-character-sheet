import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetConfigPanelComponent } from './sheet-config-panel.component';

describe('SheetConfigPanelComponent', () => {
  let component: SheetConfigPanelComponent;
  let fixture: ComponentFixture<SheetConfigPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetConfigPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetConfigPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
