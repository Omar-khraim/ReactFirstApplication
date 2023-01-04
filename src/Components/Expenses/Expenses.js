import ExpnseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';

function Expenses(param) {

  const [filterYear , setSelectedDate] = useState('2022');
  
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
        <ExpnseItem
          title={param.expenses[0].title}
          amount={param.expenses[0].amount}
          date={param.expenses[0].date}
        />
        <ExpnseItem
          title={param.expenses[1].title}
          amount={param.expenses[1].amount}
          date={param.expenses[1].date}
        />
        <ExpnseItem
          title={param.expenses[2].title}
          amount={param.expenses[2].amount}
          date={param.expenses[2].date}
        />
        <ExpnseItem
          title={param.expenses[3].title}
          amount={param.expenses[3].amount}
          date={param.expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
