import React, { useState } from 'react';
import "../styles/styles.css";

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const RELATIONSHIP_MAP = {
    1: 'Friends',
    2: 'Love',
    3: 'Affection',
    4: 'Marriage',
    5: 'Enemy',
    0: 'Siblings',
  };

  const handleCalculate = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult('Please Enter valid input');
      return;
    }

    let arr1 = name1.split('');
    let arr2 = name2.split('');

    // Remove common characters (case-sensitive, one-by-one)
    for (let i = 0; i < arr1.length; i++) {
      let char = arr1[i];
      let indexInArr2 = arr2.indexOf(char);
      if (indexInArr2 !== -1) {
        arr1[i] = '';
        arr2[indexInArr2] = '';
      }
    }

    const remainingLength = arr1.filter(Boolean).length + arr2.filter(Boolean).length;
    const relationshipIndex = remainingLength % 6;
    setResult(RELATIONSHIP_MAP[relationshipIndex]);
  };

  const handleClear = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div className="container">
      <h1>FLAMES Relationship Calculator</h1>
      <input
        data-testid="input1"
        name="name1"
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        data-testid="input2"
        name="name2"
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />

      <div className="buttons">
        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={handleCalculate}
        >
          Calculate
        </button>
        <button data-testid="clear" name="clear" onClick={handleClear}>
          Clear
        </button>
      </div>

      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default App;
