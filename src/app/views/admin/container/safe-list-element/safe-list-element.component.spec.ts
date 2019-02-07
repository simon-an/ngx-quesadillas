import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeListElementComponent } from './safe-list-element.component';
import { MatTooltipModule, MatIconModule, MatListModule } from '@angular/material';
import { SafeRowComponent } from '../../components/safe-row/safe-row.component';
import { Safe } from '~core/model';

describe('SafeListElementComponent', () => {
  let component: SafeListElementComponent;
  let fixture: ComponentFixture<SafeListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTooltipModule, MatIconModule, MatListModule],
      declarations: [SafeRowComponent, SafeListElementComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeListElementComponent);
    component = fixture.componentInstance;
    component.safe = { id: '1234' } as Safe;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
