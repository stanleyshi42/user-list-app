import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() username!: string;
  @Input() password!: string;
  @Input() icon!: string;
  
  constructor() {}
}
