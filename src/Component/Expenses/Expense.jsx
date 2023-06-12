import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filteredYear, setfilteredYear] = useState("2023");

  const filterExpenses = props.items.filter(
    (item) => item.date.getFullYear() === Number(filteredYear)
  );

  const yearChangeHandler = (year) => {
    setfilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} getYear={yearChangeHandler} />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
};

export default Expense;
