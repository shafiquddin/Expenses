import React, { useState } from "react";
import ExpenseList from '../NewExpense/ExpenseList';
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const filterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterHandler} />
      <ExpenseChart expense={filteredExpense}/>
      <ExpenseList filterExp={filteredExpense}/>
    </Card>
  );
};

export default Expenses;
