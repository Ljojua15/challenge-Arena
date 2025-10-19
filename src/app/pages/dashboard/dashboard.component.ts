import { Component } from '@angular/core';
import {LayoutFooterComponent} from '../../components/layout-footer/layout-footer.component';
import {RouterOutlet} from '@angular/router';
import {LayoutHeaderComponent} from '../../components/layout-header/layout-header.component';

@Component({
  selector: 'crocoarena-dashboard',
  imports: [
    RouterOutlet,
    LayoutHeaderComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
