import { Component } from '@angular/core';
import { User } from 'src/app/shared/User.model';
import { LoginService } from 'src/app/shared/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  userData!: User; // Define a property to hold the user data
  subscription!: Subscription; // Define a property to hold the subscription

  constructor(private loginService: LoginService) {}

  signUp(data: User) {
    // Call the service method to fetch user data
    this.subscription = this.loginService.signUp(data).subscribe({
      next: (data: User) => {
        this.userData = data; // Assign the fetched data to the userData property
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      },
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the subscription when the component is destroyed
    this.subscription.unsubscribe();
  }
}
