
import ExpnseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

function Expenses(param){
    return(
        <Card className="expenses">

        <ExpnseItem
          title={param.expenses[0].title}
          amount={param.expenses[0].amount}
          date = {param.expenses[0].date}
        />
        <ExpnseItem 
          title={param.expenses[1].title}
          amount={param.expenses[1].amount}
          date = {param.expenses[1].date}
          />
        <ExpnseItem 
          title={param.expenses[2].title}
          amount={param.expenses[2].amount}
          date = {param.expenses[2].date}
          />
        <ExpnseItem 
          title={param.expenses[3].title}
          amount={param.expenses[3].amount}
          date = {param.expenses[3].date}
          />
     
      </Card>
    );
}

export  default Expenses;