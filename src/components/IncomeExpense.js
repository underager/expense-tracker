import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.itemAmount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <div>
      {console.log('In IncomeExpense return div')}
      <h2>Income</h2>
      <h5>{income}</h5>

      <h2>Expense</h2>
      <h5>{expense}</h5>
    </div>
  );
};

export default IncomeExpense;
