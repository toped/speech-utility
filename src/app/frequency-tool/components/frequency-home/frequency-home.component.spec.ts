import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyHomeComponent } from './frequency-home.component';

describe('FrequencyHomeComponent', () => {
  let component: FrequencyHomeComponent;
  let fixture: ComponentFixture<FrequencyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
