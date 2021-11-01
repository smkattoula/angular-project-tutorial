import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() startGameEvent = new EventEmitter<number>();
  interval: any;
  lastNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onStartGame(): void {
    this.interval = setInterval(() => {
      this.startGameEvent.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onEndGame(): void {
    console.log('The game has ended!');
    clearInterval(this.interval);
  }
}
