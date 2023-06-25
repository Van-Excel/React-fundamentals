import React from 'react';

//rendering of lists

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

export default function Lists() {
  const listItems = products.map(function (product) {
    return <li key={product.id}>{product.title} </li>;
  });
  return <ul>{listItems}</ul>;
  //throws an error about using objects as children without ul. why??
  
}
