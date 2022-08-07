import React ,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  // this function is passed to the ExpenseForm component
  // we use this function to save the data to the parent component
  // its passed using the onSaverExpenseData prop which passes a pointer
  // to the function

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // pull the data from the form and put it into the object
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    // we are passing the data to the parent component which is App
    // using a pointer to the function
    props.onAddExpense(expenseData);
    setIsOpen(false);

  };
  const startAddingExpenseHandler = () => {
    setIsOpen(true);
    };

    const cancelAddingExpenseHandler = () => {
        setIsOpen(false);
    };

  return (
    // we need to pass the data from child to parent
    // pass the data from the ExpenseForm component to the NewExpense component
    // and from the NewExpense component to the App component
    <div className="new-expense">
        {!isOpen && <button onClick={startAddingExpenseHandler}>Add New Expense</button>}
      {isOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {cancelAddingExpenseHandler}/>}
    </div>
  );
};
export default NewExpense;
