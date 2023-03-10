import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) =>{
    
    const [enteredtitle, setEnteredtitle ] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredtitle:"",
    //     enteredAmount:"",
    //     enteredDate:"",
    // });


    const titleChangeHandler =(event) =>{
        setEnteredtitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredtitle:event.target.value,
        // })

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle:event.target.value}
        // })
    }


    const amountChangeHandler =(event) =>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // })
    }


    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })

       
    }

   const submitHandler =(event)=>{
    event.preventDefault();

    const expenseData = {
        title:enteredtitle,
        amount:+enteredAmount,
        date:new Date(enteredDate)
    }
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredtitle("");
    setEnteredAmount("");
    setEnteredDate("");
   }
  return <form onSubmit={submitHandler}>
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
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit" >Add expense</button>
        </div> 

  </div>
</form>
}
export default ExpenseForm;