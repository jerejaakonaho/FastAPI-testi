// src/useCalculator.js
import { useState } from 'react';

export function useCalculator() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [output, setOutput] = useState('Waiting for response...');

  const handleSend = async () => {
    // Basic validation to prevent NaN errors
    if (!input1 || !input2) {
        setOutput("Please enter both numbers.");
        return;
    }

    setOutput('Sending data...');

    try {
      const BASE_URL = window.location.hostname === 'localhost'
    ?   'http://localhost:8000'       // Kehitystila (oma kone)
    :   'https://fastapi-testi-e9sl.onrender.com/'; // Tuotanto (oikea serveri)
    
      const response = await fetch(`${BASE_URL}/api/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input1: parseInt(input1),
          input2: parseInt(input2)
        }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      setOutput(`Result: ${data.result}`);

    } catch (error) {
      console.error(error);
      setOutput('Failed to connect to the server.');
    }
  };

  // Return exactly what the UI needs to display or control
  return {
    input1,
    setInput1,
    input2,
    setInput2,
    output,
    handleSend
  };
}