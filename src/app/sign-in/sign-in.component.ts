import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';
import { AuthService } from '../auth-service.service';
import { ChangeDetectorRef } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  userIsLoggedIn = false;

  usersData:any[]=[]

  constructor(
    private cerbungservice: CerbungserviceService, 
    private router: Router, 
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef,
    private user: UserService) 
    {

    this.loadUsersData();
  }

  loadUsersData() {
    // Mengambil data pengguna dari CerbungserviceService
    this.usersData = this.user.usersData;
  }

  onSignIn() {
    const user = this.usersData.find((user) => user.email === this.email && user.password === this.password);

    if (user) {

      this.authService.setLoggedIn(true);
      this.userIsLoggedIn = true;
      this.router.navigate(['/home']);
    } else {

      alert('Login gagal. Silakan coba lagi atau coba sign-up');
      
    }
  }

  signUp() {
    // Implementasi logika Sign Up di sini
    this.router.navigate(['/sign-up']);
  }

  onLogout() {
    this.authService.setLoggedIn(false);
    this.router.navigate(['/sign-in']).then(() => {
      this.changeDetectorRef.detectChanges();
    });
  }
}
