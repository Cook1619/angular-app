import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h1>{{ title }}</h1>
      <h1 [innerHTML]="title"></h1>
      <div>
        {{ numberOne + numberTwo }}
      </div>
      <div>
        {{ isHappy ? ":-)" : ":-(" }}
      </div>
      <input type="text" [value]="name">
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = 'Matt'
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  constructor() {
    this.title = "Angular Starter App";
  }
}
