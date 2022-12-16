import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpnseItem(param){

 
    return (
      <div className='expense-item'>
       <ExpenseDate date = {param.date} />
        <div className='expense-item__description'>
          <h2>{param.title}</h2>
          <div className='expense-item__price '>${param.amount}</div>
        </div>
        <div></div>
      </div>
    );
}

export default ExpnseItem;