import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageKey } from './storage.model';
import { CurrentTokenRole } from '../../interfaces/current-token-role.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: Storage = localStorage;
  
  private currentRoleSubject = new BehaviorSubject<CurrentTokenRole | null>(
    this.read(StorageKey.CURRENT_ROLE)
  );

  currentRole$ = this.currentRoleSubject.asObservable();

  constructor() {
    this.storage = localStorage;
  }

  public save(key: StorageKey, value: any) {
    const val = JSON.stringify(value);
    this.storage.setItem(key, val);

    if (key === StorageKey.CURRENT_ROLE) {
      this.currentRoleSubject.next(value);
    }
  }

  public read(key: StorageKey): any {
    const value = this.storage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  public remove(key: StorageKey) {
    this.storage.removeItem(key);
    if (key === StorageKey.CURRENT_ROLE) {
      this.currentRoleSubject.next(null);
    }
  }

  public clear() {
    this.storage.clear();
    this.currentRoleSubject.next(null);
  }
}
