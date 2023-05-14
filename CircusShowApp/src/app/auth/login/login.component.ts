import {Component, OnInit} from '@angular/core';
import {LoginForm} from "../auth.interface";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: LoginForm = {
    email: "",
    password: "",
  }

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  submit() {
    this.authService.login(this.form)
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
