// pass the data from the App component to the Expenses component
// from the Expenses component we pass the data to the ExpenseItem component
// from the ExpenseItem component we pass the data to the ExpenseDate component
// its like a tree of components
// the Expenses component is the root of the tree
// the ExpenseItem component is the leaf of the tree
// the ExpenseDate component is the leaf of the tree

import React, { useState } from 'react';

import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
// The checklist for passing data from child to parent compoenets
// 1. listen to changes in the componoent that produces the data in this example it is ExpensesFilter
// To listen to changes we add onChange prop to the element in the child that we want to listen too
// onChange we usually want to trigger a function
// so we define a function in the child component (ExpensesFilter). usually named with handler
// this function is passed as a pointer to onChange
// we then need to forward the data to the parent component (Expenses)
//         -> OnChange = {definedFunctionHandler}
// the function we defined takes an event object as an argument

// 2. Next we move to the parent component (Expenses)
// we add the child component (ExpensesFilter) to the parent component (Expenses) as an element
// (remember to import it)

// 3. We want to forward the value to the parent and manage it as a state in the parent
// We want to pass a function to the ExpensesFilter element in the parent component
// So that this element calls the function whenever a new value is selected
// So in the parent (Expenses) we define a function that is passed down to then ExpensesFilter element
// it gets data as an arugmment rather than event (eg year)
//

//4. In the parent add a prop to the child element using the onSyntax
// this prop will equal the function defined in the parent

// 5. In the child we add props to the function we defined and it calls the onSytax function from the parent
// eg props.onSytnax(event.target.value)

// 6. Now we want to save it as a state in the parent
// so we import useState
// we then have ouur const array = useState('2020')
// now we add the set from array to the function defined in the parent
// you can pass the filter year to the child element in parent to set up a 2 way binding
// then we pass the currently selected year as a prop to Expenses Filter

// CODE
// ALL IN EXPENSES FILTER
// const dropdownChangeHandler = (event) => {
//     props.onChangeFilter(event.target.value);
// };

// <select value={props.selected} onChange={dropdownChangeHandler}>

// expenses
// const [filteredYear, setFilteredYear] = useState('2020');

// const filterChangeHandler = selectedYear => {
//   console.log(selectedYear);
//   setFilteredYear(selectedYear);
// };

// <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
