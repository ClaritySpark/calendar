import React from "react";

import { TOTAL_CELLS, HALF_MONTH } from "./../constants";

const useCalendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = React.useState(today);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const lastDateOfPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const dates = [];

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    dates.push(lastDateOfPrevMonth - i);
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    dates.push(i);
  }

  const remainingDays = TOTAL_CELLS - dates.length;

  for (let i = 1; i <= remainingDays; i++) {
    dates.push(i);
  }

  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    currentDate
  );

  const goToPrevMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1)
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const isToday = (date: number) =>
    date === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const isOtherMonth = (index: number) =>
    index < firstDayOfMonth || index >= lastDateOfMonth + firstDayOfMonth;

  const isCurrentMonth = (index: number) =>
    index >= firstDayOfMonth && index < lastDateOfMonth + firstDayOfMonth;

  const handleDateClick = ({
    date,
    isCurrentMonth,
  }: {
    date: number;
    isCurrentMonth: boolean;
  }) => {
    if (!isCurrentMonth) {
      if (date > HALF_MONTH) {
        goToPrevMonth();
      } else {
        goToNextMonth();
      }
    } else {
      setCurrentDate(new Date(currentYear, currentMonth, date));
    }
  };

  return {
    monthName,
    currentYear,
    currentDate,
    dates,
    goToPrevMonth,
    goToNextMonth,
    goToToday,
    isToday,
    isOtherMonth,
    isCurrentMonth,
    handleDateClick,
  };
};

export default useCalendar;
