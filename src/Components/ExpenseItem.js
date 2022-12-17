import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpnseItem(param){

 
    return (
      <Card className='expense-item'>
       <ExpenseDate date = {param.date} />
        <div className='expense-item__description'>
          <h2>{param.title}</h2>
          <div className='expense-item__price '>${param.amount}</div>
        </div>      
      </Card>
    );
}

export default ExpnseItem;