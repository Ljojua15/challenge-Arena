import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'crocoarena-auth-login',
  imports: [
    RouterLink
  ],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss'
})
export class AuthLoginComponent {


  private readonly authService = inject(AuthService)

  handleSubmit(){
    const email = (document.querySelector('#email') as any)?.value
    if(email === 'admin'){
      this.authService.setLoginToCompany()
    } else if (email === 'emp') {
      this.authService.setLogin()
    }
  }
}
