import {Component, effect, inject, Injector, signal} from '@angular/core';

@Component({
  selector: 'crocoarena-challenge2',
  imports: [],
  templateUrl: './challenge2.component.html',
  styleUrl: './challenge2.component.scss'
})
export class Challenge2Component {
public selected = signal(false)

  public startChallenge() {
  this.selected = signal(true)
  }
  private readonly injector = inject(Injector);

constructor() {
  console.log(this.injector)
  effect(() => {

  },{allowSignalWrites: true, injector:this.injector});
}
}
