import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";


function ExpenseItem(props) {

  
//   const [title, setTitle] = useState(props.title);
// console.log('reload?');

//   const changeButton = () => {
//     setTitle('Updated'+title);
//     console.log(title);
//     props.addExpense
//   };


    
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
      <button >Change </button>
    </Card>
  );
}

export default ExpenseItem;
