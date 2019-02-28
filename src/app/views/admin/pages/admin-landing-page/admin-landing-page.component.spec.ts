import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandingPageComponent } from './admin-landing-page.component';
import { MatListModule, MatTooltipModule, MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { SafeListComponent } from '../../container/safe-list/safe-list.component';
import { SafeListElementComponent } from '../../container/safe-list-element/safe-list-element.component';
import { SafeRowComponent } from '../../components/safe-row/safe-row.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '~layout/layout.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AdminLandingPageComponent', () => {
  let component: AdminLandingPageComponent;
  let fixture: ComponentFixture<AdminLandingPageComponent>;
  let httpMock: HttpTestingController;

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
        HttpClientTestingModule,
        TranslateModule.forRoot()
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
    httpMock = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(AdminLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
