import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (propsData) => {
  const ListenDropdownHandler = (event) => {
    console.log(event.target.value,'event.target.value');
    propsData.DataDropdownDate(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={propsData.selectedYear} onChange={ListenDropdownHandler}>
        <option value='all'>All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;