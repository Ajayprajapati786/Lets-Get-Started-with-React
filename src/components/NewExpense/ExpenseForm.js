import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = () =>{
    
    const [enteredtitle, setEnteredtitle ] = useState("");
    const titleChangeHandler =(event) =>{
        console.log(event.target.value)
        setEnteredtitle(event.target.value);
    }

    const [enteredAmount, setEnteredAmount] = useState("");

    const amountChangeHandler =(event) =>{
        console.log(event.target.value)
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState("01-01-2020");

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    }
  return <form>
  <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} value={enteredtitle}/>
        </div>

        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
        </div>

        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2025-12-31" onChange={dateChangeHandler} value={enteredDate}/>
        </div>

        <div className="new-expense__actions">
            <button type="submit">Add expense</button>
        </div>

  </div>
</form>
}
export default ExpenseForm;