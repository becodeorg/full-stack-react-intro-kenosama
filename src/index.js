import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomInput from './CustopInput';
import Header from './Header.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <CustomInput type="text" name="Todo Name" placeholder="your next ToDo" />
  </React.StrictMode>
);

