import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenses(expenseData);
  };

  const [active, SetActive] = useState(false);

  const activeAddExpense = () => {
   return SetActive(true);
   
  }
  const removeAddExpense = () => SetActive(false);

  return (
    <>
      <div className="new-expense">
        {!active && <button onClick={activeAddExpense} className="addExpense">Add New Expenses</button>}
        {active && (
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} removeExpenseForm ={removeAddExpense}></ExpenseForm>
        )}
      </div>
    </>
  );
};

export default NewExpense;
