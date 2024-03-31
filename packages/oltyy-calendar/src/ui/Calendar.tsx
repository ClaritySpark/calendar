import React from "react";

const TOTAL_CELLS = 42;
const HALF_MONTH = 15;
const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Calendar = () => {
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

const WrapperStyle: React.CSSProperties = {
  width: "900px",
  border: "1px solid #7d7d7d",
  borderRadius: "1rem",
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1.5em",
  textAlign: "center",
  padding: "1rem",
};

const buttonWrapper: React.CSSProperties = {
  display: "flex",
  gap: "0.5rem",
};

const todayButtonStyle: React.CSSProperties = {
  padding: "0.5rem",
  fontSize: "1rem",
  cursor: "pointer",
  backgroundColor: "#7d7d7d20",
  outline: "none",
};

const buttonStyle: React.CSSProperties = {
  padding: "0.5rem",
  fontSize: "1rem",
  width: "37px",
  cursor: "pointer",
  backgroundColor: "#7d7d7d20",
  outline: "none",
};

const weekWrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
};

const weekStyle: React.CSSProperties = {
  flex: "1",
  textAlign: "end",
  paddingRight: "0.5rem",
  marginBottom: "0.5rem",
  userSelect: "none",
};

const dayWrapperStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
};

const dayStyle = ({
  index,
  isOtherMonth,
}: {
  index: number;
  isOtherMonth: boolean;
}): React.CSSProperties => ({
  padding: "0.5rem",
  textAlign: "end",
  height: "6rem",
  color: isOtherMonth ? "#7d7d7d80" : "white",
  border: "1px solid #7d7d7d20",
  borderRight:
    index % 7 === 6 || index % 7 >= 0 ? "none" : "1px solid #053bd11f",
  borderBottom: index >= 0 ? "none" : "1px solid #7d7d7d20",
  borderLeft: index % 7 === 0 ? "none" : "1px solid #7d7d7d20",
  userSelect: "none",
});

const dateStyle = ({ isToday }: { isToday: boolean }): React.CSSProperties => {
  return {
    color: "white",
    fontWeight: isToday ? 800 : "normal",
    padding: "0.25rem",
    borderRadius: isToday ? "9999px" : "0",
    border: isToday ? "1px solid #053bd1" : "none",
    backgroundColor: isToday ? "#053bd1" : "transparent",
  };
};
