import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { Page2pdfModule } from 'src/app/shared/page2pdf/page2pdf.module';
import { SheetConfigPanelComponent } from './sheet-config-panel.component';

describe('SheetConfigPanelComponent', () => {
  let component: SheetConfigPanelComponent;
  let fixture: ComponentFixture<SheetConfigPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetConfigPanelComponent ],
      imports: [ MatIconModule, MatSnackBarModule, Page2pdfModule ]
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
