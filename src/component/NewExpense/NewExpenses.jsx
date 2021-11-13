import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [wrap, setWrap] = useState(true);

  return (
    <div className="new-expense">
      {wrap ? (
        <button onClick={() => setWrap(false)}>Add Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={()=>setWrap(true)}/>
      )}
    </div>
  );
};

export default NewExpense;
