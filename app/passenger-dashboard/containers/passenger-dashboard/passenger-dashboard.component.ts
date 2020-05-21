import { Component } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  templateUrl: "./passenger-dashboard.component.html",
})

export class PassengerDashboardComponent {
  name: string = "";
  handleChange(value: string) {
    this.name = value;
  }
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Bill",
      checkedIn: true,
      checkedInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: "Fred",
      checkedIn: false,
      checkedInDate: null,
      children: [{ name: "Cody", age: 18 }],
    },
    {
      id: 3,
      fullname: "Nancy",
      checkedIn: true,
      checkedInDate: 1460742000000,
      children: [{ name: "Shane", age: 22 }],
    },
    {
      id: 4,
      fullname: "taylor",
      checkedIn: true,
      checkedInDate: null,
      children: null,
    },
    {
      id: 5,
      fullname: "Mike",
      checkedIn: false,
      checkedInDate: 1480742000000,
      children: [{ name: "Tom", age: 11 }],
    },
  ];
}
