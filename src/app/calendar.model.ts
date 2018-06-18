export interface ICalendar {
    month: number;
    listOfWeeks: ICalendarWeeks[];
}

export interface ICalendarWeeks {
        week: number;
        daysOfWeek: ICalendarDays[];
}

export interface ICalendarDays {
        day: number;
        enable: boolean;
}

