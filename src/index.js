import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from "./Todo.jsx"
import Header from './Components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Todo />
  </React.StrictMode>
);

