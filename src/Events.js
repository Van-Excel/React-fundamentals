import React from 'react';

//responding to events

export default function Events() {
  function handleClick() {
    console.log('I have been clicked');
  }
  return <button onClick={handleClick}>Click Me</button>;
}
