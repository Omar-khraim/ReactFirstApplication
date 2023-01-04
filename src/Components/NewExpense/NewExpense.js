import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(param) {
  function saveExpenseData(formData) {
    const expenseData = {
      ...formData,
      id: Math.random().toString(),
    };
    // console.log(formData);
    param.onAddExpense(formData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData ={saveExpenseData}/>
    </div>
  );
}

export default NewExpense;
