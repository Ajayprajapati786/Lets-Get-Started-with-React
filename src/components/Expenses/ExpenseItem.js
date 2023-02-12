import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';

const clickHandler =() =>{
    console.log("Clicked!!!!");
};

const deleteExpenseHandler = () => {
    const parent = document.querySelector('.expense-item').parentNode;
    parent.removeChild(document.querySelector('.expense-item'));
  };

const ExpenseItem=(props)=>{
  return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteExpenseHandler}>Delete Expense</button>
        </Card>
    )
}

export default ExpenseItem;