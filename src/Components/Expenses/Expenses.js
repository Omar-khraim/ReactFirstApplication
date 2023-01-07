import ExpnseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';

function Expenses(param) {

  const [filterYear , setSelectedDate] = useState('2022');
  
  const filteredExpenses = param.expenses.filter(x => x.date.getFullYear().toString() === filterYear);

  function selectDate(selectedYear) {
    setSelectedDate(selectedYear);
    // param.Expenses.filter(x=>x == new Date(selectDate));
    console.log('from Expenses.js')
    console.log(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onSelecteFilter={selectDate} />

        {filteredExpenses.map((ex) => (
          <ExpnseItem key={ex.id} title={ex.title} amount={ex.amount} date={ex.date} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
