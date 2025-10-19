import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommonModule, DecimalPipe} from '@angular/common';

@Component({
  selector: 'crocoarena-challenge3',
  imports: [
    DecimalPipe,
    CommonModule,
  ],
  templateUrl: './challenge3.component.html',
  styleUrl: './challenge3.component.scss'
})
export class Challenge3Component implements OnInit {
  seconds = 5;
  isSpinning = false;
  wheelText = 'Ready to Spin';
  participants = [
    'Lasha J.', 'Nino T.', 'Giorgi L.', 'Ana K.', 'David T.',
    'Maria S.', 'Irakli B.', 'Tamar G.', 'Nika P.', 'Salome R.'
  ];
  winnerName: string | null = null;

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    const timer = setInterval(() => {
      this.seconds--;

      if (this.seconds <= 0) {
        clearInterval(timer);
        this.startSpin();
      }
    }, 1000);
  }

  startSpin() {
    this.isSpinning = true;
    this.wheelText = 'Spinning...';
    setTimeout(() => {
      this.isSpinning = false;
      const winner = this.participants[Math.floor(Math.random() * this.participants.length)];
      this.winnerName = winner;
      this.wheelText = `🎉 Winner: ${winner}`;
    }, 3000);
  }

  closeWinner() {
    this.winnerName = null;
    this.seconds = 10;
    this.wheelText = 'Ready to Spin';
    this.startCountdown();
  }
}
