import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.itemAmount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      {console.log('In Balance return div')}
      <h2>Balance</h2>
      <h5>{total}</h5>
    </div>
  );
};

export default Balance;
