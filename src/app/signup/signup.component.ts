import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  model: Order = new Order('', '', '', '');
  onSubmit(): void {
    console.log(this.model);
  }
}

export class Order {
  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
    public password: string
  ) {}
}
