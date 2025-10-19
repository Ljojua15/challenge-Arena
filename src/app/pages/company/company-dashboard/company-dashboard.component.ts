import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CompanyHeaderComponent} from '../company-header/company-header.component';
import {CompanyFooterComponent} from '../company-footer/company-footer.component';

@Component({
  selector: 'crocoarena-company-dashboard',
  imports: [
    RouterOutlet,
    CompanyHeaderComponent,
    CompanyFooterComponent,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './company-dashboard.component.html',
  styleUrl: './company-dashboard.component.scss'
})
export class CompanyDashboardComponent {

}
