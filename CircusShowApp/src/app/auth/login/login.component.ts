import {Component, OnInit} from '@angular/core';
import {LoginForm} from "../auth.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    email: "",
    password: "",
  }

  constructor() {
  }

  ngOnInit() {
  }


  submit() {
    console.log(this.form)
  }
}
