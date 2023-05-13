import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavebackgroundComponent } from './wavebackground.component';

describe('WavebackgroundComponent', () => {
  let component: WavebackgroundComponent;
  let fixture: ComponentFixture<WavebackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WavebackgroundComponent]
    });
    fixture = TestBed.createComponent(WavebackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
