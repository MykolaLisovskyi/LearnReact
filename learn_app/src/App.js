import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  { title: "One", amount: 300, date: new Date(2021, 1, 18), id: 1, },
  { title: "TWo", amount: 301, date: new Date(2022, 3, 18), id: 2, },
  { title: "Three", amount: 302, date: new Date(2019, 5, 18), id: 3, },
  { title: "Four", amount: 303, date: new Date(2018, 2, 18), id: 4, },
  { title: "FouFiver", amount: 333, date: new Date(2019, 9, 18), id: 5, },
  { title: "FouFiver", amount: 503, date: new Date(2021, 2, 18), id: 6, },
  { title: "FouFiver", amount: 203, date: new Date(2022, 5, 18), id: 7, },
  { title: "FouFiver", amount: 103, date: new Date(2020, 4, 18), id: 8, },

];
function App() {



  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpense = (expense) =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];

    });
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpenses = {addExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
