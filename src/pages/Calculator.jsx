import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('0');
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay(display === '0' ? value : display + value);
    }
  };

  return (
    <>
      <div className="calculator"> 
        <div className="screen">{display}</div>
        <div className="buttons">
          <button data-clear onClick={() => handleButtonClick('C')}>C</button>
          <button data-op onClick={() => handleButtonClick('/')}>/</button>
          <button data-op onClick={() => handleButtonClick('*')}>*</button>
          <button data-op onClick={() => handleButtonClick('-')}>-</button>
          <button data-op onClick={() => handleButtonClick('+')}>+</button>
          <button data-num onClick={() => handleButtonClick('7')}>7</button>
          <button data-num onClick={() => handleButtonClick('8')}>8</button>
          <button data-num onClick={() => handleButtonClick('9')}>9</button>
          <button data-num onClick={() => handleButtonClick('4')}>4</button>
          <button data-num onClick={() => handleButtonClick('5')}>5</button>
          <button data-num onClick={() => handleButtonClick('6')}>6</button>
          <button data-num onClick={() => handleButtonClick('1')}>1</button>
          <button data-num onClick={() => handleButtonClick('2')}>2</button>
          <button data-num onClick={() => handleButtonClick('3')}>3</button>
          <button data-num onClick={() => handleButtonClick('0')} className="wide">0</button>
          <button data-num onClick={() => handleButtonClick('.')}>.</button>
          <button data-eq onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;