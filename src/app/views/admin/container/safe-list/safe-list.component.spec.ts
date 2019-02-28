import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeListComponent } from './safe-list.component';
import { MatTooltipModule, MatIconModule, MatListModule } from '@angular/material';
import { Safe } from '~core/model';
import { of } from 'rxjs';
import { SafeListElementComponent } from '../safe-list-element/safe-list-element.component';
import { SafeRowComponent } from '../../components/safe-row/safe-row.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SafeListComponent', () => {
  let component: SafeListComponent;
  let fixture: ComponentFixture<SafeListComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTooltipModule, MatIconModule, MatListModule, HttpClientTestingModule, TranslateModule.forRoot()],
      declarations: [SafeListComponent, SafeListElementComponent, SafeRowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeListComponent);
    component = fixture.componentInstance;
    component.safes$ = of([{ id: '1234' } as Safe]);
    httpMock = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
