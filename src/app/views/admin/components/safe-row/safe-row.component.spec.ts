import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeRowComponent } from './safe-row.component';
import { MatIconModule, MatListModule } from '@angular/material';

describe('SafeRowComponent', () => {
  let component: SafeRowComponent;
  let fixture: ComponentFixture<SafeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatListModule],
      declarations: [ SafeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
