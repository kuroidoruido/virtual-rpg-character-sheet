import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderCheckboxGroupComponent } from './placeholder-checkbox-group.component';

describe('PlaceholderCheckboxGroupComponent', () => {
  let component: PlaceholderCheckboxGroupComponent;
  let fixture: ComponentFixture<PlaceholderCheckboxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderCheckboxGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
