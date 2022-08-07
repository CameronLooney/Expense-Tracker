// component in React is just a JS function
// React can only have one root element in the DOM
// ReactDOM is a library that helps us render the components to the DOM
import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";


function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("New Title");
        console.log("clicked");
    }
  return (
    // nested components
    // use props to pass data to nested components
    // pass data from a component to a nested component using props
    <Card className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h3>{title}</h3>
      </div>
      <div className="expense-item__price">€{props.price}</div>
    </Card>
  );
}
// need to export to actually use it
export default ExpenseItem;
