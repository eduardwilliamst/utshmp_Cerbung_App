import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; // Ganti dengan impor yang sesuai

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  userName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {} // Inject service

  ngOnInit() {}

  onSignUp() {
    // Simpan data pengguna ke layanan
    this.userService.addUser({
      userName: this.userName,
      email: this.email,
      password: this.password,
    });

    // Redirect ke halaman sign-in
    this.router.navigate(['/sign-in']);
  }
}
