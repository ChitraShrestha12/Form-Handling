import React, { useState } from "react";
import "./App.css";
import ExpensesForm from "./components/EXpensesForm";
import ExpensesTable from "./components/ExpensesTable";
import ExpensesData from "./ExpensesData";

const App = () => {
  const [expensesData,setExpensesData] = useState(ExpensesData)
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpensesForm setExpensesData={setExpensesData}/>
        <ExpensesTable expensesData={expensesData}/>
      </div>
    </main>
  );
};

export default App;
