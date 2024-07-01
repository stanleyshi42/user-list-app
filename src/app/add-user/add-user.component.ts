import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  user: User = {
    username: '',
    password: '',
    icon: '',
  };
  constructor(private service: UserService) {}

  addUser(): void {
    // Input validation
    if (this.user.username.trim() == '' || this.user.password.trim() == '') {
      console.log('Invalid username or password');
      return;
    }

    this.service.addUser(this.user).subscribe((data) => {
      console.log(data);
      location.reload(); // Refresh page
    });
  }
}
