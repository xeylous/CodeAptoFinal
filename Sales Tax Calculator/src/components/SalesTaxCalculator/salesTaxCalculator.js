'use client'
import React, { useState } from 'react';

const SalesTaxCalculator = () => {
  const [beforeTaxPrice, setBeforeTaxPrice] = useState('');
  const [salesTaxRate, setSalesTaxRate] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [currency, setCurrency] = useState('USD');

  const currencies = ['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD', 'JPY'];

  const calculateTotalPrice = () => {
    const price = parseFloat(beforeTaxPrice);
    const taxRate = parseFloat(salesTaxRate);

    if (isNaN(price) || isNaN(taxRate)) {
      setTotalPrice('Please enter valid numbers.');
      return;
    }

    const taxAmount = (price * taxRate) / 100;
    const total = price + taxAmount;
    setTotalPrice(total.toFixed(2));
  };

  const handleBeforeTaxPriceChange = (event) => {
    const value = event.target.value;
    if (value >= 0) {
      setBeforeTaxPrice(value);
      setTotalPrice('');
    }
  };

  const handleSalesTaxRateChange = (event) => {
    const value = event.target.value;
    if (value >= 0) {
      setSalesTaxRate(value);
      setTotalPrice('');
    }
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="container">
      <h2>Sales Tax Calculator</h2>

      <div className="input-group">
        <label>Before Tax Price:</label>
        <div className="currency-input">
          <input
            type="number"
            value={beforeTaxPrice}
            onChange={handleBeforeTaxPriceChange}
            placeholder="Enter price before tax"
            min="0"
          />
          <select value={currency} onChange={handleCurrencyChange}>
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>Sales Tax Rate (%):</label>
        <input
          type="number"
          value={salesTaxRate}
          onChange={handleSalesTaxRateChange}
          placeholder="Enter sales tax rate"
          min="0"
        />
      </div>

      <button onClick={calculateTotalPrice}>Calculate Total Price</button>

      {totalPrice && (
        <div className="result">
          <h3>
            Total Price After Tax: {currency} {totalPrice}
          </h3>
        </div>
      )}

      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          background-color: #2d3748;
          border-radius: 8px;
          color: white;
        }

        h2 {
          margin-bottom: 20px;
        }

        .input-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        .currency-input {
          display: flex;
          align-items: center;
        }

        input {
          flex: 1;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #4a5568;
          background-color: #4a5568;
          color: white;
        }

        select {
          margin-left: 10px;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #4a5568;
          background-color: #4a5568;
          color: white;
        }

        button {
          width: 100%;
          padding: 10px;
          background-color: #3182ce;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        }

        button:hover {
          background-color: #2b6cb0;
        }

        .result {
          margin-top: 20px;
        }

        h3 {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default SalesTaxCalculator;
