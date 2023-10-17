import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.page.html',
  styleUrls: ['./preference.page.scss'],
})
export class PreferencePage implements OnInit {


  darkTheme: boolean = false;
  notifications: boolean = true;

  constructor(private authService: AuthService, private route: Router) { }

  toggleDarkTheme() {
    this.darkTheme = !this.darkTheme;
  }

  // Fungsi untuk mengaktifkan atau menonaktifkan notifikasi
  toggleNotifications() {
    this.notifications = !this.notifications;
  }

  // Fungsi untuk keluar (logout)
  onLogout() {
    this.authService.setLoggedIn(false);
    this.route.navigate(['/sign-in']).then(() => {
      window.location.reload();
    });
  }


  refresh() {

  }

  ngOnInit() {
  }

}
