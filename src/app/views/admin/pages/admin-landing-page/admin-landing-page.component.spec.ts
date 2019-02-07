import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandingPageComponent } from './admin-landing-page.component';
import { MatListModule, MatTooltipModule, MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { SafeListComponent } from '../../container/safe-list/safe-list.component';
import { SafeListElementComponent } from '../../container/safe-list-element/safe-list-element.component';
import { SafeRowComponent } from '../../components/safe-row/safe-row.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '~layout/layout.module';

describe('AdminLandingPageComponent', () => {
  let component: AdminLandingPageComponent;
  let fixture: ComponentFixture<AdminLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        MatListModule,
        MatTooltipModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        NoopAnimationsModule,
      ],
      declarations: [
        AdminLandingPageComponent,
        SafeListComponent,
        SafeListElementComponent,
        SafeRowComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
