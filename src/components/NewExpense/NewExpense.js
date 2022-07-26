import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (propsData) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveDataFromExepenseComponentHandler = (responseData) => {
    const exepenseData = {
      ...responseData,
      id: Math.random().toString(),
    };
    propsData.onAddData(exepenseData);
    setIsEditing(false);
  };
  const setIsEditinghandler = () => {
    setIsEditing(true);
  };
  const setOnCancelHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={setIsEditinghandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveDataFromExepenseComponent={
            onSaveDataFromExepenseComponentHandler
          }
          onCancel={setOnCancelHandler}
        />
      )}
    </div>
  );
};
{
  /* <ExpenseForm /> */
}
export default NewExpense;
