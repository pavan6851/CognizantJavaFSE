import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('Euro'); // Default currency set to Euro
  const [convertedAmount, setConvertedAmount] = useState('');

  // Convert INR to Euro or vice versa
  const convertCurrency = () => {
    const conversionRate = 85; // Example conversion rate for INR to Euro (1 Euro = 85 INR)
    if (currency === 'Euro') {
      setConvertedAmount((amount * conversionRate).toFixed(2)); // INR to Euro
    } else {
      setConvertedAmount((amount / conversionRate).toFixed(2)); // Euro to INR
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    convertCurrency();
  };

  return (
    <div>
      <h2>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label>Currency:</label>
          <select onChange={(e) => setCurrency(e.target.value)} value={currency}>
            <option value="Euro">Euro</option>
            <option value="INR">INR</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>

      {convertedAmount && (
        <div>
          <h3>Converted Amount: {convertedAmount} {currency === 'Euro' ? 'INR' : 'Euro'}</h3>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
