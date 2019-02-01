import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Safe } from '~core/model';
import { SafeService } from '~core/services';

@Component({
  selector: 'cool-safe-list',
  templateUrl: './safe-list.component.html',
  styleUrls: ['./safe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafeListComponent implements OnInit {
  safes$: Observable<Safe[]>;
  constructor(private service: SafeService) {}

  ngOnInit() {
    this.safes$ = this.service.getSafes();
  }
}
