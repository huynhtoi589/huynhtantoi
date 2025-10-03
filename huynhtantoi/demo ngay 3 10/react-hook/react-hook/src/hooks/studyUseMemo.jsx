import React, { useState, useMemo } from "react";

function expensiveCalculation(num: number) {
  console.log("Calculating...");
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += num * 2;
  }
  return result;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Chỉ tính lại khi count thay đổi
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Calculation: {calculation}</p>
      <p>Other: {other}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setOther(other + 1)}>Increase Other</button>
    </div>
  );
}
