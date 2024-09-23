
import React, { useState } from 'react';
import './App.css';

function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addTransaction = () => {
    if (description.trim() === '' || amount === '') return;

    const newTransaction = {
      description,
      amount: parseFloat(amount),
    };

    setTransactions([...transactions, newTransaction]);
    setDescription('');
    setAmount('');
  };

  const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <h3>Total Balance: Rs.{totalBalance.toFixed(2)}</h3>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addTransaction}>Add Transaction</button>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.description}: Rs.{transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;
