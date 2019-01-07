import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'energyCalculator';
    lumenOptions = [375, 600, 900, 1125, 1600];
    currentLumens = 600;
    currentCost = 12;
    currentHours = 3;
    totalDays = 365;

  incConversion = .0625;
  halConversion = .0450;
  cflConversion = .0146;
  ledConversion = .0125;
  incWattage;
  halWattage;
  cflWattage;
  ledWattage;
  totalHours;
  cost;
  incCost;
  halCost;
  cflCost;
  ledCost;


  onChange(data) {
    this.currentLumens = data;
    console.log(this.currentLumens);
  }

  calculate($event) {
    this.incWattage = (this.currentLumens * this.incConversion).toFixed(1);
    this.halWattage = (this.currentLumens * this.halConversion).toFixed(1);
    this.cflWattage = (this.currentLumens * this.cflConversion).toFixed(1);
    this.ledWattage = (this.currentLumens * this.ledConversion).toFixed(1);

    if (this.currentHours > 24) { this.currentHours = 24; }
    this.totalHours = this.totalDays * this.currentHours;
    this.cost = this.currentCost / 100;

    this.incCost = (((this.incWattage * this.totalHours) / 100) * this.cost).toFixed(2);
    this.halCost = (((this.halWattage * this.totalHours) / 100) * this.cost).toFixed(2);
    this.cflCost = (((this.cflWattage * this.totalHours) / 100) * this.cost).toFixed(2);
    this.ledCost = (((this.ledWattage * this.totalHours) / 100) * this.cost).toFixed(2);
   // return this.incWattage;
  }
  constructor() {}
  ngOnInit() {
    this.calculate(event);
  }
}

