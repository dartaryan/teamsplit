import {Injectable} from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {LoginForm, RegisterForm} from "./auth.interface";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: boolean = false;
  public isLoading: boolean = false;
  private passwordMatch: boolean = true;

  constructor(private router: Router) {
  }

  login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        alert("Yes! Let's party")
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Are you sure you typed the right info?")
        this.isAuthenticated = false;
      }).finally(() => (this.isLoading = false))
  }

  register(form: RegisterForm) {
    if (form.password !== form.confirmPassword) {
      this.passwordMatch = false;
      return
    }
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      }).finally(() => (this.isLoading = false))
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login'])
      this.isAuthenticated = false;
    }).catch((error) => {
      // An error happened.
    });
  }
}
