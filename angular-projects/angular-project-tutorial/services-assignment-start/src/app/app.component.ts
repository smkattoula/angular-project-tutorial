import { Component, Injectable } from "@angular/core";

import { UsersService } from "./services/users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
@Injectable({ providedIn: "root" })
export class AppComponent {}
