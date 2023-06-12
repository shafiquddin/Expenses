import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const Month = props.date.toLocaleString("en-US", { month: "long" });
  const Day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const Year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{Month}</div>
      <div className="expense-date__year">{Year}</div>
      <div className="expense-date__day">{Day}</div>
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "expense-date" },
  //   React.createElement("div", { className: "expense-date__month" }, Month),
  //   React.createElement("div", { className: "expense-date__year" }, Year),
  //   React.createElement("div", { className: "expense-date__day" }, Day)
  // );
};

export default ExpenseDate;
