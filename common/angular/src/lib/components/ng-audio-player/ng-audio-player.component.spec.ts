import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAudioPlayerComponent } from './ng-audio-player.component';

describe('NgAudioPlayerComponent', () => {
  let component: NgAudioPlayerComponent;
  let fixture: ComponentFixture<NgAudioPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAudioPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
