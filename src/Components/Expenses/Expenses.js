import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(param) {
  const [filterYear, setSelectedDate] = useState("2022");

  const filteredExpenses = param.expenses.filter(
    (x) => x.date.getFullYear().toString() === filterYear
  );

  // let expensesContent = <p>no expenses for this year.</p>;

  // if(filteredExpenses.length > 0){
  //   expensesContent = filteredExpenses.map((ex) => (
  //     <ExpnseItem key={ex.id} title={ex.title} amount={ex.amount} date={ex.date} />
  //   ));
  // }

  function selectDate(selectedYear) {
    setSelectedDate(selectedYear);
    // param.Expenses.filter(x=>x == new Date(selectDate));
    console.log("from Expenses.js");
    console.log(selectedYear);
  }

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onSelecteFilter={selectDate} />

        {/* {filteredExpenses.length === 0 
        ? (<p>no expenses for this year.</p>)
        : filteredExpenses.map((ex) => (
          <ExpnseItem key={ex.id} title={ex.title} amount={ex.amount} date={ex.date} />
        ))} */}

        {/* instead of having the conditions inside the return statment we can donitnbefore so we can have cleaner code */}
        {/* {expensesContent} */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
