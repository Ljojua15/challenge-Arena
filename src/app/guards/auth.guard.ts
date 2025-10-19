import {inject} from '@angular/core';
import {AuthService} from '../service/auth.service';


export function AuthGuard ()  {

  const authService = inject(AuthService)
  const isAuthorized = authService.isAuthorized()

  if(!isAuthorized) {
    authService.goToLogin()
  }

  return isAuthorized
}

