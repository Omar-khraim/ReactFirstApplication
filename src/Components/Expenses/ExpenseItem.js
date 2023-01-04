import React , {useState} from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpnseItem(param){

const [title , setTitle] = useState(param.title);

// let title = param.title;
const clickHnadler = ()=>{
  setTitle("upddated");
  console.log(title);
};

    return (
      <Card className='expense-item'>
       <ExpenseDate date = {param.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price '>${param.amount}</div>
        </div>   
        <button onClick={clickHnadler}>click to update title</button>   
      </Card>
    );
}

export default ExpnseItem;