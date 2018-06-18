import { Component, OnInit } from '@angular/core';
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
  startDate: Date = new Date(2018, 5, 17);
  numberOfDays: number;
  countryCode: string;
  calendarList: ICalendar[] = [];
  constructor() {

  }

  ngOnInit(): void {
    this.numberOfDays = 15;
    this.createCalendar();
  }

  createCalendar() {
const calendar = <ICalendar>{};
    const monthCalendar = this.getInitialMonth(this.startDate);
    calendar.month = monthCalendar;
    calendar.listOfWeeks = [];
    console.log('start date', this.startDate);
    console.log('start month', monthCalendar);
    const startDayOfWeek = this.getInitialDay(this.startDate);
    console.log('start day of week', startDayOfWeek);
    const lastDayOfMonth = new Date(this.startDate.getUTCFullYear(), monthCalendar + 1, 0).getDate();
    console.log('last day of month:', lastDayOfMonth);
    let initialDate = this.startDate.getDate();
    console.log('initial date', initialDate);
    let counterOfDays = 0;

    while (counterOfDays <= this.numberOfDays) {
console.log(counterOfDays);
         for (let f = 0; f < 6; f++) {
          const daysOfWeek: ICalendarWeeks = <ICalendarWeeks>{};
          const listDays: ICalendarDays[] = [];
          for (let d = 0; d < 7; d++) {
            // todo
            console.log('test', d);
            const day: ICalendarDays = <ICalendarDays>{};

            if (d >= startDayOfWeek || f > 0) {
              // hasValue
              day.day = initialDate;
              day.enable = true;
              counterOfDays ++;
              initialDate ++;
            } else {
              day.day = 0;
              day.enable = false;
            }
            listDays.push(day);
            
            if (startDayOfWeek === lastDayOfMonth) {
    
            }
          }

          daysOfWeek.week = 1;
          daysOfWeek.daysOfWeek = listDays;
          console.log('days per week', daysOfWeek);
          calendar.listOfWeeks.push(daysOfWeek);
          console.log('weeks per month', calendar);
          if (counterOfDays > this.numberOfDays) {
            // leave week
            console.log('break weeks');
            break;
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
