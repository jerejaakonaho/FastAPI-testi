import styles from './App.module.css';
import { useCalculator } from './useCalculator'; // Import your new hook

function App() {
  // Pull the logic out of the hook
  const { input1, setInput1, input2, setInput2, output, handleSend } = useCalculator();

  return (
    <div className={styles.container}>
      <h1>FastAPI testi</h1>

      <div className={styles.formGroup}>
        <input 
          type="number" 
          placeholder="Input 1" 
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          className={styles.inputField}
        />
        
        <input 
          type="number" 
          placeholder="Input 2" 
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          className={styles.inputField}
        />

        <button onClick={handleSend} className={styles.submitButton}>
          Send to API
        </button>
      </div>

      <div className={styles.outputBox}>
        <h3>Output:</h3>
        <p>{output}</p>
      </div>
    </div>
  )
}

export default App;