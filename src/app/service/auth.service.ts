import {inject, Injectable, signal} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {

   isAuthorized = signal(false)

  private router = inject(Router)


  public setLogin() {
     this.isAuthorized.set(true)
     this.router.navigateByUrl('/dashboard').then()
  }

  public setLoginToCompany() {
    this.isAuthorized.set(true)
    this.router.navigateByUrl('/company').then()
  }

  public goToLogin() {
    this.isAuthorized.set(false)
    this.router.navigateByUrl('/login').then()
  }

  public setLogOut() {
    this.isAuthorized.set(false)
    this.router.navigateByUrl('/').then()
  }

}
