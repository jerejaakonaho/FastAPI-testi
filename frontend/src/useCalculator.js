// src/useCalculator.js
import { useState } from 'react';

export function useCalculator() {
  // 1. STATE: Create variables to hold the user's input and the server's response.
  // We use strings ('') for inputs initially to handle empty text boxes easily.
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [output, setOutput] = useState('Waiting for response...');

  // 2. Function that runs when the user clicks the "Calculate" button.
  const handleSend = async () => {
    
    // Check if the user left any field empty. If so, stop here.
    if (!input1 || !input2) {
        setOutput("Please enter both numbers.");
        return;
    }

    // Tell the user that work is in progress.
    setOutput('Sending data...');

    try {
      // 3. API call that sends a request to the Backend (Python/FastAPI).
      const response = await fetch('https://fastapi-testi-e9sl.onrender.com/api/add', {
        method: 'POST', // We are sending data, so we use POST.
        headers: { 'Content-Type': 'application/json' }, // Tell server we are sending JSON.
        body: JSON.stringify({
          // Convert string inputs to integers (numbers) before sending.
          // The backend expects numbers, not text.
          input1: parseInt(input1),
          input2: parseInt(input2)
        }),
      });

      // Check if the server had a problem (like a 500 error).
      if (!response.ok) throw new Error(`Error: ${response.status}`);

      // 4. If success, parse the JSON answer from the server.
      const data = await response.json();
      
      // Update the UI with the calculated result.
      setOutput(`Result: ${data.result}`);

    } catch (error) {
      // 5. Error message if the internet is down or the server is offline.
      console.error(error);
      setOutput('Failed to connect to the server.');
    }
  };

  // 6. EXPORT: Return these values and functions so the UI component can use them.
  return {
    input1,
    setInput1,
    input2,
    setInput2,
    output,
    handleSend
  };
}