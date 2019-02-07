import { Component, EventEmitter, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { SafeItem } from '~core/model';

@Component({
  selector: 'cool-safe-item-form',
  templateUrl: './safe-item-form.component.html',
  styleUrls: ['./safe-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafeItemFormComponent implements OnInit {
  @Output()
  result: EventEmitter<SafeItem> = new EventEmitter();
  model: SafeItem = {} as SafeItem;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.result.emit(this.model);
  }
}
