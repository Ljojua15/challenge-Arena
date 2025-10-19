import {Component, OnInit} from '@angular/core';
import {CommonModule, DecimalPipe, NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'crocoarena-quizz',
  imports: [
    NgClass,
    NgIf,
    DecimalPipe,
    CommonModule
  ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})
export class QuizzComponent implements OnInit {
  questions: any[] = [
    {
      question: 'What does ISTQB stand for?',
      answers: [
        { key: 'A', text: 'International Software Testing Qualifications Board' },
        { key: 'B', text: 'International System Testing Quality Bureau' },
        { key: 'C', text: 'Institute of Software Testing and Quality Benchmarks' },
        { key: 'D', text: 'International Standards for Testing Quality Board' },
      ],
      correct: 'A',
    },
    {
      question: 'Which testing technique is used to verify system behavior?',
      answers: [
        { key: 'A', text: 'Boundary Value Analysis' },
        { key: 'B', text: 'Black-box Testing' },
        { key: 'C', text: 'White-box Testing' },
        { key: 'D', text: 'Static Testing' },
      ],
      correct: 'B',
    },
    {
      question: 'What is the main purpose of unit testing?',
      answers: [
        { key: 'A', text: 'To test the entire system' },
        { key: 'B', text: 'To test UI usability' },
        { key: 'C', text: 'To verify small, individual pieces of code' },
        { key: 'D', text: 'To evaluate product performance' },
      ],
      correct: 'C',
    },
    {
      question: 'What does ISTQB stand for?',
      answers: [
        { key: 'A', text: 'International Software Testing Qualifications Board' },
        { key: 'B', text: 'International System Testing Quality Bureau' },
        { key: 'C', text: 'Institute of Software Testing and Quality Benchmarks' },
        { key: 'D', text: 'International Standards for Testing Quality Board' },
      ],
      correct: 'A',
    },
    {
      question: 'Which testing technique is used to verify system behavior?',
      answers: [
        { key: 'A', text: 'Boundary Value Analysis' },
        { key: 'B', text: 'Black-box Testing' },
        { key: 'C', text: 'White-box Testing' },
        { key: 'D', text: 'Static Testing' },
      ],
      correct: 'B',
    },
    {
      question: 'What is the main purpose of unit testing?',
      answers: [
        { key: 'A', text: 'To test the entire system' },
        { key: 'B', text: 'To test UI usability' },
        { key: 'C', text: 'To verify small, individual pieces of code' },
        { key: 'D', text: 'To evaluate product performance' },
      ],
      correct: 'C',
    },
  ];

  current = 0;
  selected: string | null = null;
  correctCount = 0;
  incorrectCount = 0;
  timeLeft = 25;
  intervalId: any;
  feedbackMessage = '';
  feedbackColor = '';
  finished = false;

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.handleTimeout();
      }
    }, 1000);
  }

  handleTimeout() {
    clearInterval(this.intervalId);
    this.feedbackMessage = "⏰ Time's up! Moving to next question.";
    this.feedbackColor = 'text-orange-400';
    setTimeout(() => this.nextQuestion(), 2000);
  }

  selectAnswer(key: string) {
    if (this.selected) return;
    clearInterval(this.intervalId);
    this.selected = key;

    const correctKey = this.questions[this.current].correct;
    if (key === correctKey) {
      this.correctCount++;
      this.feedbackMessage = '✅ Correct! +10 points earned';
      this.feedbackColor = 'text-green-400';
    } else {
      this.incorrectCount++;
      this.feedbackMessage = '❌ Wrong answer – try next one';
      this.feedbackColor = 'text-red-400';
    }
  }

  nextQuestion() {
    if (this.current + 1 >= this.questions.length) {
      this.finished = true;
      clearInterval(this.intervalId);
      return;
    }

    this.current++;
    this.selected = null;
    this.feedbackMessage = '';
    this.feedbackColor = '';
    this.timeLeft = 25;
    this.startTimer();
  }

  restart() {
    this.current = 0;
    this.selected = null;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.feedbackMessage = '';
    this.feedbackColor = '';
    this.finished = false;
    this.timeLeft = 25;
    this.startTimer();
  }
}
