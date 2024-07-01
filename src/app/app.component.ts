import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'user-list-app';
  users!: User[];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
