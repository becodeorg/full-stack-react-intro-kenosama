import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from "./Todo"
import Header from './Components/Header';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* render the Header from the component */}
    <Header />
    {/* go fetch the APP of ToDo from the jsx file */}
    <Todo />
    {/* render the footer from the component */}
    <Footer/>
  </React.StrictMode>
);

