import { Injectable } from '@angular/core';
import { Safe, SafeItem } from '../model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SafeService {
  // private currentSafe: Subject<Safe> = new Subject<Safe>();
  private safes: BehaviorSubject<Safe[]> = new BehaviorSubject<Safe[]>([]);
  private items: BehaviorSubject<SafeItem[]> = new BehaviorSubject<SafeItem[]>([]);

  getSafe(safeId: string): Observable<Safe> {
    return this.safes.asObservable().pipe(map((safes1: Safe[]) => safes1.find(safe => safe.id === safeId)));
  }

  getSafes(): Observable<Safe[]> {
    return this.safes.asObservable();
  }

  getItems(safeId: string): Observable<SafeItem[]> {
    this.items.next(null);
    setTimeout(() => {
      if (safeId === '1') {
        this.items.next([{ id: '1', name: 'Fahrrad', price: 55.5 }, { id: '2', name: 'Laptop' , price: 999.99}] as SafeItem[]);
      } else if (safeId === '2') {
        this.items.next([
          { id: '3', name: 'Taschenrechner', price: 123.5 },
          { id: '4', name: 'Sonnenbrille', price: 345 },
          { id: '5', name: 'Brille', price: 567 },
        ] as SafeItem[]);
      }
    }, 2000);
    return this.items.asObservable();
  }

  constructor() {
    this.safes.next([
      {
        id: '1',
        value: 999,
        itemSize: 2,
        users: ['111'],
        active: true,
        activeSince: new Date(1999, 1, 1),
      },
      {
        id: '2',
        value: 123,
        itemSize: 3,
        users: ['17', '19', '25'],
        active: true,
        activeSince: new Date(2018, 12, 30),
      },
    ] as Safe[]);
  }
}
