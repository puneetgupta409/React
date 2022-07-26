import './ExpenseDate.css'
const ExpenseDate = (dateData) => {
  const month = dateData.date.toLocaleString("en-US", { month: "long" });
  const year = dateData.date.toLocaleString("en-US", { year: "numeric" });
  const day = dateData.date.toLocaleString("en-US", { day: "numeric" });

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
