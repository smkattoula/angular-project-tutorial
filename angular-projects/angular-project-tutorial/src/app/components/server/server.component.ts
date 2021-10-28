import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  toggle: boolean = false;
  counter: number = 0;
  btnClicks: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  onToggleDetails() {
    this.toggle = !this.toggle;
    this.btnClicks.push((this.counter += 1));
  }
}
