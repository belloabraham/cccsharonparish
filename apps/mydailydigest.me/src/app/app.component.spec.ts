import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from '@cccsharonparish.org/angular';
import { SubSink } from 'subsink';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslocoRootModule, HttpClientModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscribe on destroy', () => {
    const mockSubSink = new SubSink();
    component['subscriptions'] = mockSubSink;
    const mockUnsubscribe = jest.spyOn(mockSubSink, 'unsubscribe');
    component.ngOnDestroy();
    expect(mockUnsubscribe).toHaveBeenCalled();
  });
});
