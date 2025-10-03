import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child re-render");
  return <button onClick={onClick}>Click me</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // callback chỉ thay đổi khi `count` thay đổi
  const handleClick = useCallback(() => {
    console.log("Count is:", count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Other: {other}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setOther(other + 1)}>Increase Other</button>
      <Child onClick={handleClick} />
    </div>
  );
}
