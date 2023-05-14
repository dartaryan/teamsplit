import {Component, OnInit} from '@angular/core';
import {RegisterForm} from "../auth.interface";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";


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

  private passwordMatch: boolean = true;


  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.password !== this.form.confirmPassword) {
      this.passwordMatch = false;
      return
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}
