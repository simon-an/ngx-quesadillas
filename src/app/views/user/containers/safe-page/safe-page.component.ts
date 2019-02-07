import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SafeService } from '~core/services';
import { SafeItem, Safe } from '~core/model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { AddSafeItemDialogComponent } from '../add-safe-item-dialog/add-safe-item-dialog.component';

@Component({
  templateUrl: './safe-page.component.html',
  styleUrls: ['./safe-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafePageComponent implements OnInit {
  safe$: Observable<Safe>;
  items$: Observable<SafeItem[]>;
  isCustomer = true; // TODO provide through dependency injection

  constructor(private activatedRoute: ActivatedRoute, private service: SafeService, private dialogService: MatDialog) {}

  ngOnInit() {
    this.safe$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getSafe(params.get('id')))
    );
    this.items$ = this.safe$.pipe(switchMap((safe: Safe) => this.service.getItems(safe.id)));
  }

  addSafeItem() {
    const dialogRef = this.dialogService.open(AddSafeItemDialogComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef
      .afterClosed()
      .pipe(withLatestFrom(this.safe$))
      .subscribe(([result, safe]: [SafeItem, Safe]) => {
        console.log(`Dialog result: ${result}`);
        if (result) {
          this.service.addItem(safe.id, result);
        }
      });
  }
}
