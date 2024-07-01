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
    this.service.addUser(this.user).subscribe((data) => {
      console.log(data);
    });
  }
}
