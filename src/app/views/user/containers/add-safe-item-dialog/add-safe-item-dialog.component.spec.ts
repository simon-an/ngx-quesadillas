import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSafeItemDialogComponent } from './add-safe-item-dialog.component';
import { SafeItemFormComponent } from '../../components/safe-item-form/safe-item-form.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('AddSafeItemDialogComponent', () => {
  let component: AddSafeItemDialogComponent;
  let fixture: ComponentFixture<AddSafeItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddSafeItemDialogComponent, SafeItemFormComponent],
      imports: [FormsModule, NoopAnimationsModule, MatInputModule, MatFormFieldModule, MatDialogModule],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: null }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSafeItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
