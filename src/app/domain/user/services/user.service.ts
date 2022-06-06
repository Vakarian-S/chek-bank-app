import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private key = 'user';
  private storage = window.localStorage;
  private readonly userSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);
  userObservable = this.userSubject.asObservable();

  constructor() { }

  save(value: User) {
    this.storage.setItem(this.key, JSON.stringify(value));
    this.userSubject.next(true);
  }

  get() {
    const value = this.storage.getItem(this.key)
    return value ? JSON.parse(value) : undefined;
  }

  delete() {
    this.storage.removeItem(this.key);
  }
}
