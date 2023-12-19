import { Component } from '@angular/core';

@Component({
  selector: 'app-coup-classique',
  templateUrl: './coup-classique.component.html',
  styleUrl: './coup-classique.component.css',
})
export class CoupClassiqueComponent {
  isAdmin: boolean = true;
  makeAdmin(): void {
    this.isAdmin ? (this.isAdmin = false) : (this.isAdmin = true);
  }
}
