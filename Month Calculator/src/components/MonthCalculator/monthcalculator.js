'use client';
import { useState } from 'react';

export default function monthcalendar() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState(null);

  const calculateMonths = () => {
    if (startDate && endDate) {
      try {
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (isNaN(start) || isNaN(end)) {
          throw new Error("Invalid date");
        }

        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        const days = Math.floor((end - start) / (1000 * 60 * 60 * 24));

        const nextMonthsary = new Date(start);
        nextMonthsary.setMonth(nextMonthsary.getMonth() + months + 1);

        setResult({
          months,
          days,
          nextMonthsary,
        });
      } catch (error) {
        console.error("Error calculating months:", error);
        setResult(null);
      }
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '30px'}}><b>Month Calculator </b></h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="startDate" style={{ display: 'block', marginBottom: '5px' }}>Start date</label>
        <input
          type="date"
          id="startDate"
          style={{ padding: '10px', width: '100%', fontSize: '16px' }}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="endDate" style={{ display: 'block', marginBottom: '5px' }}>End date</label>
        <input
          type="date"
          id="endDate"
          style={{ padding: '10px', width: '100%', fontSize: '16px' }}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
<button
        style={{
          backgroundColor: '#e95e0e',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          width: '100%',
          marginBottom: '20px',
          transition: 'background-color 0.3s, transform 0.3s', // Added transition
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d86a0c'} // Hover color
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e95e0e'} // Original color
        onClick={calculateMonths}
      >
        Calculate
      </button>

      {result && (
        <div style={{ backgroundColor: '#f1f1f1', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
          <h3 style={{ color: '#007bff', fontSize: '20px'}}>Calculation results</h3>
          <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
            <p style={{ margin: '0' }}>Calendar months between the dates: <strong>{result.months}</strong></p>
          </div>
          <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
            <p style={{ margin: '0' }}>Exact time between the dates: <strong>{result.months} months, {result.days % 30} days</strong></p>
          </div>
          <div>
            <p style={{ margin: '0' }}>
              Date of next monthsary: <strong>{result.nextMonthsary.toLocaleDateString()}</strong> 
              ({Math.floor((result.nextMonthsary - new Date()) / (1000 * 60 * 60 * 24))} days till then)
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

