import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // when we click the button, we want to pass the data to the parent component
  // the parent component is the New Expense component
  // we define an object with the data from the form
  // the parent component will use this object to create a new expense item
  // we do this using a props and calling the function from the parent component
  // we then clear the form after we submit the data
  // so you get the data in child and save the data in parent
  const submitHandler = (event) => {
    
    // prevents the page from reloading
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      // convert the string to a date object
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    // clear the form
    // we defined the function in the New Expense component
    // we execute the function in the ExpenseForm component
    // this is how we communicate up from child to parent component
    
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value = {enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min ="0.01" step="any" value = {enteredPrice} onChange={priceChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value = {enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type= "button" onClick = {props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
