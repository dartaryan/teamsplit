import {Component, OnInit} from '@angular/core';
import {RegisterForm} from "../auth.interface";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: RegisterForm = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  submit() {
    this.authService.register(this.form)
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
