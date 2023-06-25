import React from 'react';
import './style.css';
import MyApp from './Doc.js';
import Condition from './Condition.js';
import Lists from './Lists.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <MyApp />
      <Condition />
      <Lists />
    </div>
  );
}
