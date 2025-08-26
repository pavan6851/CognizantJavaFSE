import React, { useState } from 'react';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  const [counter, setCounter] = useState(1);

  // Increment function
  const increment = () => {
    setCounter(counter + 1);
    sayHello();
  };

  // Decrement function
  const decrement = () => {
    setCounter(counter - 1);
  };

  // Say Hello Function
  const sayHello = () => {
    alert('Hello! Welcome to the Event Handling App!');
  };

  // Say Welcome Function
  const sayWelcome = (message) => {
    alert(`Welcome, ${message}!`);
  };

  // OnPress event handler
  const handleOnPress = () => {
    alert("Converting to Euro Amount is " + counter * 80); // Adjusted for example
  };

  return (
    <div className="App">
      <h1>Event Handling Example</h1>

      {/* Increment/Decrement Section */}
      <div>
        <h3>{counter}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      {/* Say Welcome Button */}
      <div>
        <button onClick={() => sayWelcome('Guest')}>Say Welcome</button>
      </div>

      {/* OnPress Button */}
      <div>
        <button onClick={handleOnPress}>Click on me</button>
      </div>

      {/* Currency Converter */}
      <CurrencyConverter />
    </div>
  );
}

export default App;
