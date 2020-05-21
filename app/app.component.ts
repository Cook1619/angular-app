import { Component } from "@angular/core";

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  name: string = "";
  handleChange(value: string) {
    this.name = value;
  }
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Bill",
      checkedIn: true,
    },
    {
      id: 2,
      fullname: "Fred",
      checkedIn: false,
    },
    {
      id: 3,
      fullname: "Nancy",
      checkedIn: true,
    },
    {
      id: 4,
      fullname: "taylor",
      checkedIn: true,
    },
    {
      id: 5,
      fullname: "Mike",
      checkedIn: false,
    },
  ];
}
