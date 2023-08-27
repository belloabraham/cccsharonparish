import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from '@cccsharonparish.org/angular';
import { SubSink } from 'subsink';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFoundComponent, TranslocoRootModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
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
