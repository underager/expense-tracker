import React from 'react';

const TransactionItem = ({ itemText, itemAmount }) => {
  return (
    <div>
      <p>
        {itemText} - {itemAmount}
      </p>
    </div>
  );
};

export default TransactionItem;
