import { Component, OnInit } from '@angular/core';
import { GlobalConst } from './global-const';
import { ICalendar, ICalendarDays } from './calendar.model';
import { CIRCULAR } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Calendar web';
  listOfMonths = GlobalConst.months;
  listOfDays = GlobalConst.days;
  startDate: Date = new Date(2018, 6, 17);
  numberOfDays: number;
  countryCode: string;
  calendarList: ICalendar[] = [];
  constructor() {

  }

  ngOnInit(): void {
    this.createCalendar();
  }

  createCalendar() {
const calendar = <ICalendar>{};
    const monthCalendar = this.getInitialMonth(this.startDate);
    calendar.month = monthCalendar;

    console.log(monthCalendar);
    let startDay = this.getInitialDay(this.startDate);
    console.log(startDay);
    const lastDay = new Date(this.startDate.getUTCFullYear(), monthCalendar + 1, 0).getDate();
    console.log(lastDay);

    while (this.startDate.getDate() <= this.startDate.getDate() + this.numberOfDays) {

    }
    // max rows for month
    for (let f = 0; f < 6; f++) {
      // days of a week
      const listDays: ICalendarDays[] = [];
      for (let d = 0; d < 7; d++) {
        // todo
        const days: ICalendarDays = {};
        days.day = 0;
        days.enable = false;
        if (d >= startDay) {
          // hasValue
          days.day = startDay;
        }
        listDays.push(days);
        startDay += 1;
        if (startDay === lastDay) {

        }
      }
    }
  }

  getInitialDate() {

  }

  getInitialMonth(date: Date): number {
    return date.getUTCMonth();
  }

  getInitialDay(date: Date): number {
    return date.getUTCDay();
  }
}
