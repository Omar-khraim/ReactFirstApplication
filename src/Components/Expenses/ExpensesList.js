import ExpnseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(param) {
  if (param.items.length === 0)
   return <h2 className='expenses-list__fallback'>no expenses for this year.</h2>;

  return (<ul className = "expenses-list">
    { param.items.map((ex) => (
      <ExpnseItem
        key={ex.id}
        title={ex.title}
        amount={ex.amount}
        date={ex.date}
      />
    ))}
    </ul>);
}

export default ExpensesList;
