import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(param) {
  
    // you can use adifferant state in the same file
  const [enteredTitle , setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate , setEnteredDate] = useState('');

  // this is the same of using differnet state but in this one you have one object and one state the obejct consist of all other values
  // the problem of this one that you have to update the whoel object each time you use it
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);

    // in this approach you can't update a single part so you have to get all previous data then update the part you need
    // if we don't do this we will delete the other values
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    //   });

    // setUserInput((preState) => {
    //   return { ...preState, enteredAmount: event.target.value };
    // });


    console.log(enteredAmount);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    //   });

  }

  function onSubmitHndler(event){
    event.preventDefault();
    const expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    };


    // empty the state and be ready to fill the new data 
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');

console.log(expenseData);
  }

  return (
    <form onSubmit={onSubmitHndler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text" 
          value={enteredTitle}
          onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
