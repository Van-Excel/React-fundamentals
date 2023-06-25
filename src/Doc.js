import React from 'react';

//a component is a piece of UI that has its own logic and appearance
// A react component is a javascript function that returns markup

//creating a component
function MyButton() {
  return <button> Click Me </button>;
}

//nesting a component
export default function MyApp() {
  return (
    <div>
      <h2>Hello Everyone</h2>
      <MyButton />
    </div>
  );
}


