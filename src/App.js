import React , {useState} from 'react';

import NewExpense from './components/NewExpense';
import Expenses from './components/Expenses';


// NOTE to pass from child to parent 
// Data stream = ExpenseForm -> NewExpense -> App
// 1. get data in ExpenseForm
// 2. New Expense is going to call ExpenseForm as an element in JSX (<ExpenseForm />)
// 3. we add a prop to the ExpenseForm component called onSaveExpenseData
// 4. this prop points to a function defined in the NewExpense component
// 5. this function is going to be called when the user clicks the save button
// 6. this function is going to take the data from the form and pass it to the parent component
// so the flow is get data in child, write function in parent, add prop in element for child in parent
// 7. call this prop in the child component
// Once we get the data in NewExpense, we pass it to the App component (so the App component is the parent)
// 8. we add a prop to the App component called onAddExpense to <NewExpense />
// 9. we write a function in the parent App component called addExpenseHandler
// 10. we call this function using the prop (which points to the function) in the child component


// Exmaple of passing data down parent to child is 
// App -> Expenses -> ExpenseItem -> ExpenseDate

// Expense Form -> New Expense -> App 
// App -> Expenses -> ExpenseItem -> ExpenseDate
// When you need data in one componeent but its generated in another, lift it up just high 
// enough until you have a compoenet that has access to both the compoent that generates the data
// and the component that needs the data
const DUMMY = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', price: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    price: 450,
    date: new Date(2021, 5, 12),
  }
];
const App = () => {
  const [expenses,setExpense] = useState(DUMMY);
  const addExpenseHandler = (expense) => {
    console.log('Data arrived in App.js');
    console.log(expense);
    setExpense(prevExpenses => {
      return [expense,...prevExpenses];
    });
  }


  
  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;