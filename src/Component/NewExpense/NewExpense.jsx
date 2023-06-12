import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [toggleExpense, setToggleExpense] = useState(false);

  const saveExpenseHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.floor(Math.random() * 1000).toString(),
    };
    props.addExpense(newExpenseData);
  };

  const toggleHandler = () => {
    setToggleExpense(true);
  };

  const cancelHandler = () => {
    setToggleExpense(false);
  };

  return (
    <div className="new-expense">
      {!toggleExpense && <button onClick={toggleHandler}>Add Expense</button>}
      {toggleExpense && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          cancelExpense={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
