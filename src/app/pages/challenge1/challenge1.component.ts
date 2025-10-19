import {Component, signal} from '@angular/core';

@Component({
  selector: 'crocoarena-challenge1',
  imports: [],
  templateUrl: './challenge1.component.html',
  styleUrl: './challenge1.component.scss'
})
export class Challenge1Component {


  selectedCard = signal<number[]>([])

  handleCard(card: number) {
    this.selectedCard.update(v => {
      v.push(card)

      return v
    })
  }
}
