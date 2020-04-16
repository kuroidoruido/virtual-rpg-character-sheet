import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteZoneComponent } from './note-zone.component';

describe('NoteZoneComponent', () => {
  let component: NoteZoneComponent;
  let fixture: ComponentFixture<NoteZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
