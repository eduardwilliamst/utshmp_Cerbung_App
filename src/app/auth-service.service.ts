import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Inisialisasi status login dengan false.
  private loggedIn = new BehaviorSubject<boolean>(false);

  // Observable untuk mengakses status login.
  loggedIn$ = this.loggedIn.asObservable();

  // Fungsi untuk mengubah status login.
  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }
}
