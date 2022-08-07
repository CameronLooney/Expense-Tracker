
    // this is the child this is where we generate the data
    // because the data is generated here we need to listen for changes here
    // to listen for changes we use the onChange prop which passes a pointer
    // it passes a function so we know we also need to add a function here
    // we now need to forward the data to the parent component (Expenses )
    // so we define a handler function in the parent component
    // we add the on prop to the element in the parent, we use prop to call that 
    // on function in the child
    // we then need to save the data in a state so we import use state and useState
    // need to initialize the state in the parent component
    // we use the setter from use state to set the state in the parent function 
    // we add the first element in arry to the element in parent to set up 2 way binding


import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;