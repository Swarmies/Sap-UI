import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/en"; // import your desired locale
import "./Calendar.css";

dayjs.locale("en"); // set the locale globally

//TODO: Defining interface
// interface Props {
//   currentMonth: Dayjs;
//   setCurrentMonth: (date: Dayjs) => void;
// }

// Defining the Calendar component
const Calendar = () => {
  // Defining the weeksInMonth function
  const weeksInMonthCurrent = (date: Dayjs) => {
    const firstDay = date.startOf("month").day();
    const daysInMonth = date.daysInMonth();
    return Math.ceil((firstDay + daysInMonth) / 7);
  };

  // Defining the state
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());
  const weeksInMonth: number = weeksInMonthCurrent(currentMonth);
  const startOfMonth: Dayjs = currentMonth.startOf("month");
  const endOfMonth: Dayjs = currentMonth.endOf("month");
  const daysInMonth: number = endOfMonth.date();
  const daysInPrevMonth: number = startOfMonth.day();
  const daysInNextMonth: number = 7 - endOfMonth.day() - 1;

  // Defining the prevMonth and nextMonth functions
  const prevMonth = (): void =>
    setCurrentMonth(currentMonth.subtract(1, "month"));
  const nextMonth = (): void => setCurrentMonth(currentMonth.add(1, "month"));

  // Defining the generateDaysArray function
  const generateDaysArray = (): (string | number)[] => {
    const daysArray: (string | number)[] = [];
    for (let i = 0; i < daysInPrevMonth; i++) {
      daysArray.push("");
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }
    for (let i = 0; i < daysInNextMonth; i++) {
      daysArray.push("");
    }
    return daysArray;
  };

  // Defining the renderDays function
  const renderDays = (): JSX.Element[] => {
    const daysArray: (string | number)[] = generateDaysArray();
    const weeksArray: (string | number)[][] = [];
    let week: (string | number)[] = [];

    daysArray.forEach((day: string | number, index: number) => {
      week.push(day);
      if (week.length === 7) {
        weeksArray.push(week);
        week = [];
      }
    });

    return weeksArray.map((week: (string | number)[], index: number) => (
      <div className="calendar-body" key={index}>
        {week.map((day: string | number, index: number) => (
          <div className="calendar-body-day" key={index} data-testid="day-cell">
            {day}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h1>{currentMonth.format("MMMM YYYY")}</h1>
        <button onClick={prevMonth}>Prev</button>
        <button onClick={nextMonth}>Next</button>
      </div>

      <div className="calendar-body">
        <div className="calendar-day-header">sun</div>
        <div className="calendar-day-header">Mon</div>
        <div className="calendar-day-header">Tue</div>
        <div className="calendar-day-header">Wed</div>
        <div className="calendar-day-header">Thu</div>
        <div className="calendar-day-header">Fri</div>
        <div className="calendar-day-header">Sat</div>
      </div>

      {renderDays()}
    </div>
  );
};

export default Calendar;
