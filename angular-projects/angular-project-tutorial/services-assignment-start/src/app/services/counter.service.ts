import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  activeCounter: number = 0;
  inactiveCounter: number = 0;

  activeCount() {
    this.activeCounter++;
    console.log("Active Counter: ", this.activeCounter);
  }

  inactiveCount() {
    this.inactiveCounter++;
    console.log("Inactive Counter: ", this.inactiveCounter);
  }
}
