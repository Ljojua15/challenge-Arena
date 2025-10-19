import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'crocoarena-leaderboard',
  imports: [
    RouterLink
  ],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent {

  public selectedDropDown: any = null

}
