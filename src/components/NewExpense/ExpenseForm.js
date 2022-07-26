
import React, { useState }  from "react";
import './ExpenseForm.css'

const ExpenseForm = (propsData) => {
    // const [userInput ,  setUserInput] = useState({
    //     titleEntered:'',
    //     amountEntered:'',
    //     dateEntered:'',
    // })
    // FOR MULTIPLE STATES
    const [titleEntered,setEnterTitle] = useState('');
    const [amountEntered,setEnterAmount] = useState('');
    const [dateEntered,setEnterDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     titleEntered: event.target.value
        // });
    }
    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amountEntered: event.target.value
        // });
    }
    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     dateEntered: event.target.value
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : titleEntered,
            amount: +amountEntered,
            date: new Date(dateEntered)
        }
        propsData.onSaveDataFromExepenseComponent(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    };
    return <form onSubmit={submitHandler}>
        <div className = "new-expense__controls">
            <div className="new-expense__control">
                <label>
                    Title
                </label>
                <input type="text" value={titleEntered} placeholder="Enter Title" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>
                    Amount
                </label>
                <input  value={amountEntered} placeholder="Enter Amount" type="number" min="0.01" step="0.01"  onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control" >
                <label>
                    Date
                </label>
                <input  value={dateEntered} placeholder="Select Date"  onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
        <button type="button" onClick={propsData.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;