import React from "react";
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
const ExpensesList = props => {
    let expenseConstant =  <p>No Expense Found</p>;
    if(props.items.length === 0 ){
      return <h2 className="expenses-list__fallback">
          Found no expenses.
      </h2>
    }
    return <ul className="expenses-list">
        {
            props.items.map((expenseData) => (
                <ExpenseItem
                  key={expenseData.id}
                  title={expenseData.title}
                  amount={expenseData.amount}
                  date={expenseData.date}
                />
              ))
        }
    </ul>
};
export default ExpensesList;