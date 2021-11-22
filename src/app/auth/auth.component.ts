import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements AfterViewInit{
  @ViewChild('email') email : ElementRef;
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService, private router : Router, private renderer : Renderer2 ) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngAfterViewInit(){
    console.log(this.email);
    this.renderer.setStyle(this.email.nativeElement, 'color' , 'blue');
  }
  

  onSubmit(form: NgForm) {
    if (!form.valid) {
      console.log('Not a vlid form!!');
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs =  this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    form.reset();
  }

  onHandleError(){
    this.error = null;
  }
}
