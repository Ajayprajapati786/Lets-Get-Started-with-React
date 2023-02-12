import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
import React, {useState} from 'react';



const ExpenseItem=(props)=>{

    const [title,setTitle] = useState(props.title);


const clickHandler =() =>{
    console.log(title);
    setTitle("Ajay");
};

const [amount,setAmount]=useState(props.amount);
const updateExpense=()=>{
    setAmount(100);
}
  return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={updateExpense}>update Expense</button>
        </Card>
    )
}

export default ExpenseItem;