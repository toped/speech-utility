import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechBoxComponent } from './speech-box.component';

describe('SpeechBoxComponent', () => {
  let component: SpeechBoxComponent;
  let fixture: ComponentFixture<SpeechBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
