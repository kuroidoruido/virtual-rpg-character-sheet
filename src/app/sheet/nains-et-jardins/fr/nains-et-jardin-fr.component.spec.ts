import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SheetWrapperModule } from 'src/app/template/sheet-wrapper';
import { OnePageModule } from 'src/app/template/one-page';
import { FakeTranslateModule } from 'src/app/test-helpers/translate.spec';
import { NainsEtJardinFrComponent } from './nains-et-jardin-fr.component';

describe('NainsEtJardinFrComponent', () => {
  let component: NainsEtJardinFrComponent;
  let fixture: ComponentFixture<NainsEtJardinFrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NainsEtJardinFrComponent ],
      imports: [ FakeTranslateModule, RouterTestingModule, SheetWrapperModule, OnePageModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NainsEtJardinFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
