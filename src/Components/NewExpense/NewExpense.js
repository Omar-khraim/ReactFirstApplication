import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(param) {

  function saveExpenseData(formData) {
    const expenseData = {      
      id: Math.random().toString(),
      ...formData
    };
    param.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData ={saveExpenseData}/>
    </div>
  );
}

export default NewExpense;
