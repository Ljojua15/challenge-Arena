import { Component } from '@angular/core';
import {LayoutHeaderComponent} from '../layout-header/layout-header.component';
import {RouterOutlet} from '@angular/router';
import {LayoutFooterComponent} from '../layout-footer/layout-footer.component';

@Component({
  selector: 'crocoarena-layout',
  imports: [
    LayoutHeaderComponent,
    RouterOutlet,
    LayoutFooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
