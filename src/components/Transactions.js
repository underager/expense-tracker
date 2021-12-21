import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TransactionItem from './TransactionItem';

const Transactions = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h2>Transactions</h2>
      {transactions.map((transaction) => {
        return (
          <TransactionItem
            itemAmount={transaction.itemAmount}
            itemText={transaction.itemText}
            key={transaction.id}
          />
        );
      })}
    </div>
  );
};

export default Transactions;
