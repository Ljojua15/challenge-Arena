import {Component, signal} from '@angular/core';
import {LayoutFooterComponent} from "../../components/layout-footer/layout-footer.component";
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'crocoarena-hero',
  imports: [
    LayoutFooterComponent,

  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {


}
