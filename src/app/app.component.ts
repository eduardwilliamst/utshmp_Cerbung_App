import { Component } from '@angular/core';
import { AuthService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  userIsLoggedIn = false;
  
  login() {
    
    this.userIsLoggedIn = true;
  }

  constructor(private authService: AuthService) {}
  
  ngOnInit() {
    this.authService.loggedIn$.subscribe((loggedIn) => {
      this.userIsLoggedIn = loggedIn;
    });
  }

}
