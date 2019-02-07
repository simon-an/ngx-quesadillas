import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeItemFormComponent } from './safe-item-form.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

describe('SafeItemFormComponent', () => {
  let component: SafeItemFormComponent;
  let fixture: ComponentFixture<SafeItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SafeItemFormComponent],
      imports: [FormsModule, NoopAnimationsModule, MatFormFieldModule, MatInputModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
