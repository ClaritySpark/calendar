import React from "react";

export const WrapperStyle: React.CSSProperties = {
  width: "900px",
  border: "1px solid #7d7d7d",
  borderRadius: "1rem",
};

export const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1.5em",
  textAlign: "center",
  padding: "1rem",
};

export const buttonWrapper: React.CSSProperties = {
  display: "flex",
  gap: "0.5rem",
};

export const todayButtonStyle: React.CSSProperties = {
  padding: "0.5rem",
  fontSize: "1rem",
  cursor: "pointer",
  backgroundColor: "#7d7d7d20",
  outline: "none",
};

export const buttonStyle: React.CSSProperties = {
  padding: "0.5rem",
  fontSize: "1rem",
  width: "37px",
  cursor: "pointer",
  backgroundColor: "#7d7d7d20",
  outline: "none",
};

export const weekWrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
};

export const weekStyle: React.CSSProperties = {
  flex: "1",
  textAlign: "end",
  paddingRight: "0.5rem",
  marginBottom: "0.5rem",
  userSelect: "none",
};

export const dayWrapperStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
};

export const dayStyle = ({
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

export const dateStyle = ({
  isToday,
}: {
  isToday: boolean;
}): React.CSSProperties => {
  return {
    fontWeight: isToday ? 800 : "normal",
    padding: "0.25rem",
    borderRadius: isToday ? "9999px" : "0",
    border: isToday ? "1px solid #053bd1" : "none",
    backgroundColor: isToday ? "#053bd1" : "transparent",
  };
};
