import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GlobalConst } from './global-const';
import { ICalendar, ICalendarDays, ICalendarWeeks } from './calendar.model';
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
  date: string;
  startDate: Date = new Date(2018, 5, 18);
  numberOfDays: number = 15;
  countryCode: string;
  calendarList: ICalendar[] = [];
  counterOfDays = 0
  constructor() {

  }

  ngOnInit(): void {
    this.createCalendar();
  }

  createCalendar() {
    this.counterOfDays = 0
    this.calendarList = [];
    if (this.date && this.date.split('/').length>1) {
      const inputYear = Number(this.date.split('/')[0]);
      const inputMonth = Number(this.date.split('/')[1]);
      const inputDay = Number(this.date.split('/')[2]);
      this.startDate = new Date(inputYear, inputMonth -1, inputDay);
    }

    const monthCalendar = this.getInitialMonth(this.startDate);

    while (this.counterOfDays <= this.numberOfDays) {
      this.fillMonth(monthCalendar);

    }

    console.log('calendar', this.calendarList);

  }

  getInitialDate() {

  }

  getInitialMonth(date: Date): number {
    return date.getUTCMonth();
  }

  getInitialDay(date: Date): number {
    return date.getUTCDay();
  }

  fillMonth(monthCalendar: number) {
    const calendar: ICalendar = <ICalendar>{};
    calendar.month = monthCalendar;
    calendar.listOfWeeks = [];
    const startDayOfWeek = this.getInitialDay(this.startDate);
    const lastDayOfMonth = new Date(this.startDate.getUTCFullYear(), monthCalendar + 1, 0).getDate();
    let initialDate = this.startDate.getDate();

    for (let f = 0; f < 6; f++) {
      const daysOfWeek: ICalendarWeeks = <ICalendarWeeks>{};
      const listDays: ICalendarDays[] = [];
      for (let d = 0; d < 7; d++) {        
        const day: ICalendarDays = <ICalendarDays>{};

        if (d >= startDayOfWeek || f > 0) {
          // hasValue
          day.day = initialDate;
          day.enable = true;
          this.counterOfDays++;
          initialDate++;
        } else {
          day.day = 0;
          day.enable = false;
        }
        listDays.push(day);

        if (initialDate > lastDayOfMonth) {
          break;
        }
      }

      daysOfWeek.week = f + 1;
      daysOfWeek.daysOfWeek = listDays;
      calendar.listOfWeeks.push(daysOfWeek);

      if (initialDate > lastDayOfMonth) {
        // create new month
        this.calendarList.push(calendar);
        this.startDate = new Date(this.startDate.getUTCFullYear(), monthCalendar + 1, 1);
        const newMonthCalendar = this.getInitialMonth(this.startDate);
        this.fillMonth(newMonthCalendar);
        break;
      }

      if (this.counterOfDays > this.numberOfDays) {
        // leave week
        console.log('break weeks');
        this.calendarList.push(calendar);
        break;
      }
    }
  }
}
