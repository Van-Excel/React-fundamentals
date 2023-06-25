import React from 'react';
import { useState } from 'react';

//updating the screen
function StateButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Clicked {count} times</button>;
}

export default function States() {
  return (
    <div>
      <StateButton />
    </div>
  );
}
