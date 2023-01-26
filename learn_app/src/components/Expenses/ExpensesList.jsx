import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === props.filteredYear;
      });
      let message = 'Nothing';
      filteredExpenses.length > 0 ? (message = filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem> ))) : (message = 'Nothing');
      
return <>
 {message}
</>; 

};

export default ExpensesList;