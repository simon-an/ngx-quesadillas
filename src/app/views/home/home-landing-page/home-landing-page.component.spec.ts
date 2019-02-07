import { MatListModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingPageComponent } from './home-landing-page.component';
import { LayoutModule } from '~layout/layout.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeLandingPageComponent', () => {
  let component: HomeLandingPageComponent;
  let fixture: ComponentFixture<HomeLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLandingPageComponent ],
      imports: [MatListModule, LayoutModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
