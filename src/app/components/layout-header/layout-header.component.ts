import {Component, inject, input, Input, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgIf} from '@angular/common';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'crocoarena-layout-header',
  imports: [
    RouterLink,
    NgIf,
    RouterLinkActive
  ],
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.scss'
})
export class LayoutHeaderComponent {

  private readonly authService = inject(AuthService);

  isLoggedIn = this.authService.isAuthorized

  displayModal  = signal(false)

  selectedTab = signal(0)
}
