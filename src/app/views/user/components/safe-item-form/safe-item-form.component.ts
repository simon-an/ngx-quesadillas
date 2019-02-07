import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cool-safe-item-form',
  templateUrl: './safe-item-form.component.html',
  styleUrls: ['./safe-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafeItemFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
