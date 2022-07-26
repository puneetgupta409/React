import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (propsData) => {
  const [FilterYear, setFilterYear] = useState("all");
  const DataDropdownDateHandler = (responseData) => {
    console.log(responseData, "responseData");
    setFilterYear(responseData);
  };
  const filterYearMap = propsData.items.filter((dateData) => {
    if (FilterYear === "all") {
      return dateData;
    } else {
      return new Date(dateData.date).getFullYear().toString() === FilterYear;
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={FilterYear}
          DataDropdownDate={DataDropdownDateHandler}
        />
        <ExpensesChart expenses={filterYearMap}></ExpensesChart>
        <ExpensesList items={filterYearMap}/>
      </Card>
    </div>
  );
};

export default Expenses;
