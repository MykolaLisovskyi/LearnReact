import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    setTitle: "",
    setAmount: "",
    setDate: "",
  });

  const TitleChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, setTitle: event.target.value };
    });
  };

  const AmountChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, setAmount: event.target.value };
    });
  };

  const DateChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, setDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.setTitle,
      amount: userInput.setAmount,
      date: new Date(userInput.setDate),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({
      setTitle: "",
      setAmount: "",
      setDate: "",
    });
  };

  return (
    <>
      <form className="new-expense__controls" onSubmit={submitHandler}>
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={userInput.setTitle}
            onChange={TitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.setAmount}
            onChange={AmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-19"
            value={userInput.setDate}
            onChange={DateChange}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={props.removeExpenseForm}>Cancel</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
