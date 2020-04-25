import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageComponent } from './one-page.component';
import { PlaceholderModule } from 'src/app/placeholder/placeholder.module';

describe('OnePageComponent', () => {
  let component: OnePageComponent;
  let fixture: ComponentFixture<OnePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePageComponent ],
      imports: [ PlaceholderModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePageComponent);
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
        pageCount: 1, 
        page1: [],
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
