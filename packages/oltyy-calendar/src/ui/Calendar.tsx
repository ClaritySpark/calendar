import React from "react";
import { CalendarProps } from "../types";

import {
  WrapperStyle,
  headerStyle,
  buttonWrapper,
  buttonStyle,
  todayButtonStyle,
  weekWrapperStyle,
  weekStyle,
  dayWrapperStyle,
  dayStyle,
  dateStyle,
} from "../styles";
import { WEEK_DAYS } from "../constants";

import useCalendar from "../utils/useCalendar";

export const Calendar = ({ data }: CalendarProps) => {
  // TODO: View에 반영
  console.log(data);

  const {
    monthName,
    currentYear,
    dates,
    goToPrevMonth,
    goToNextMonth,
    goToToday,
    isToday,
    isOtherMonth,
    isCurrentMonth,
    handleDateClick,
  } = useCalendar();

  return (
    <section style={WrapperStyle}>
      <header style={headerStyle}>
        {monthName} {currentYear}
        <div style={buttonWrapper}>
          <button style={buttonStyle} onClick={goToPrevMonth}>
            {"<"}
          </button>
          <button style={todayButtonStyle} onClick={goToToday}>
            Today
          </button>
          <button style={buttonStyle} onClick={goToNextMonth}>
            {">"}
          </button>
        </div>
      </header>
      <section style={weekWrapperStyle}>
        {WEEK_DAYS.map((day) => (
          <h4 key={day} style={weekStyle}>
            {day}
          </h4>
        ))}
      </section>
      <div style={dayWrapperStyle}>
        {dates.map((date, index) => (
          <div
            key={index}
            style={dayStyle({
              index,
              isOtherMonth: isOtherMonth(index),
            })}
            onClick={() =>
              handleDateClick({
                date,
                isCurrentMonth: isCurrentMonth(index),
              })
            }
          >
            <span style={dateStyle({ isToday: isToday(date) })}>{date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
