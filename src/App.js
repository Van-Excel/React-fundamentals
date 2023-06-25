import React from 'react';
import './style.css';
import MyApp from './Doc.js';
import Condition from './Condition.js';
import Lists from './Lists.js';
import Events from './Events.js';
import States from './States.js'

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <MyApp />
      <Condition />
      <Lists />
      <Events />
      <States />
      
    </div>
  );
}
