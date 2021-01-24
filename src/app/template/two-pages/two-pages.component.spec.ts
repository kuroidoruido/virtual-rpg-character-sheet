import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TwoPagesComponent } from './two-pages.component';
import { PlaceholderModule } from 'src/app/placeholder/placeholder.module';

describe('TwoPagesComponent', () => {
  let component: TwoPagesComponent;
  let fixture: ComponentFixture<TwoPagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPagesComponent ],
      imports: [ PlaceholderModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPagesComponent);
    component = fixture.componentInstance;
    component.characterData = { values: { characterName: '' } };
    component.sheetConfig = { 
      gameId: 'gid', 
      sheetId: 'sid',
      pageConfig: {
        pageFormat: 'A4',
        pageOrientation: 'portrait',
        pageWidth: 100,
        pages: []
      },
      content: {
        pageCount: 2, 
        page1: [], 
        page2: [],
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
