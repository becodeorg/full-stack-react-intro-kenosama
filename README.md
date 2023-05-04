# The Todo app :) 

<details>
  <summary> Detail of the first day </summary>
For this moment, we have to make a ToDo app stored locally,

On **the first day**, we have to understand the principle of Components and how to insert it into the App. 

I worked with Shared components, by that, i mean, i want to re-use my components if i need, so the InputForm is easily re-usable for a future project if needed.  you will find them into the [Components/Shared Folder](/src/Components/Shared)  
  


# FormInput Component

This is a **React** component that helps to create an input field or a textarea. 
<details>
    <summary>Click here if you wanna see the code</summary>

```jsx
import Slugify from "./Slugify";

const FormInput = (props) => {
  const type = props.type ? props.type : "text"; 
  const name = props.name ? props.name: " ";
  const value = props.value ? props.value: null;
  const label = props.label ? props.label: Slugify(name);
  const placeholder = props.placeholder ? props.placeholder: "";
  
  
  return (
    <>
      <label htmlFor={label}>{name}:</label> &nbsp;
      {type === "textarea" ? (
        <textarea name={name} id={Slugify(name)} placeholder={placeholder}>
          {value}
        </textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={Slugify(name)}
          placeholder={placeholder}
          value={value}
        />
      )}
    </>
  );
};

export default FormInput;
``` 
</details>

## What is a Props?

A **props** is an object that contains properties and values. In this component, `props` is a parameter of the function that holds the values that are passed from its parent component.

## How it Works

This component receives different **props** such as `type`, `name`, `value`, `label`, and `placeholder`. If any of these props is not passed, the component assigns a default value to them.  
ex here :  
```jsx
const type = props.type ? props.type : "text"; 
``` 

Then, it renders a label and either an input field or a textarea based on the type of `props.type` that is passed. The label and input field or textarea are created with the `name`, `id`, and `placeholder` values passed through the props. 

If a `value` prop is passed, it is added to the input or textarea field as the initial value. 

The `Slugify` function, imported from another file, is used to convert the `name` value into a URL-friendly string to be used as the `id` value.

That's it! This component helps to create simple and reusable input fields and textareas.

# TodoList Component

This is a **React** component that renders a form to add a todo and a list of todos.
<details>
    <summary>Click Here if you wanna see the code</summary>
    
```jsx
//importing the necessary dependencies from React
// import React , { useState } from "react";
import CustomInput from "./Components/Shared/FormInput";
import Button from "./Components/Shared/Button";
import ListElement from "./Components/ListElement"
//Creating the TodoList Component
const TodoList= () =>{
    return (
      <div>
        <div className="container">
          <form action="">
            <CustomInput
              type="text"
              name="Name ToDo"
              placeholder="Write the ToDo"
            />
            <Button type="submit" text="Add todo" />
          </form>
        </div>
        <div className="container">
            <ul>
              <ListElement name="TODO 1" />                
              <ListElement name="TODO 2" />                
              <ListElement name="TODO 3" />                
              <ListElement name="TODO 4" />                
            </ul>
        </div>
      </div>
    );

};
// Export the TodoList component as the default export of the module.
export default TodoList;
```
</details>
## How it Works

The component first imports some necessary dependencies from React and other components, including `CustomInput`, `Button`, and `ListElement`.

The `CustomInput` component is used to create an input field for the user to write a new todo. The `Button` component is used to add the new todo to the list. 

A `form` element is used to contain the input field and the button. 

The `ListElement` component is used to create an unordered list of todos. Four `ListElement` components are used to create placeholders for four sample todos. 

The component does not have any functionality yet, but it provides a basic structure for a todo list application. 

That's it! This component is simple, but it can be expanded to create a functional todo list application.
</details>

<details>
<summary> detail of the second day </summary>
My Todo App is a simple application where you can write down things you need to do and mark them as done when you finish them.

## How to use it?
Type your task in the input field.
Click the "Add todo" button to add it to the list.
Click the checkbox next to the task when you finish it to mark it as done.
Click the "Delete" button to remove the task from the list.
How it works?
When you add a task, it gets saved to your browser's local storage, so even if you close the tab or the browser, your tasks will be there when you come back.

Let's see some code examples:

<details>
<summary>Getting the saved tasks from local storage</summary>

```jsx
useEffect(() => {
  // Get the todos from the local storage or make an empty array
  const storedToDos = JSON.parse(localStorage.getItem(LSKEY + ".ToDos")) || [];
  // If there are stored todos, update the state with them
  if (storedToDos.length > 0) setToDos(storedToDos);
}, []);
```
This code uses useEffect hook to get the tasks from local storage when the component mounts.

</details>

<details>
<summary>Saving tasks to local storage</summary>

```jsx
useEffect(() => {
  window.localStorage.setItem(LSKEY + ".ToDos", JSON.stringify(ToDos));
}, [ToDos]);
```
This code uses useEffect hook to save the tasks to local storage every time the tasks state changes.

</details>
<details>
<summary>Adding a new task to the list</summary>

```jsx
const handleSubmitForm = (e) => {
  e.preventDefault();
  const postedFormRef = contentRef.current.value;
  console.log(postedFormRef);
  const id = uuidv4();
  const newToDos = {
    text: postedFormRef,
    done: false,
    id: id,
  };
  setToDos([...ToDos, newToDos]);
  contentRef.current.value = "";
};
```
This code handles the form submission and creates a new task object with a unique ID using the uuidv4 library. It then adds the new task to the tasks array using the setToDos function.

</details>
<details>
<summary>Marking a task as done</summary>

```jsx
const handleChecked = (index) => {
  const newToDos = [...ToDos];
  newToDos[index].done = !newToDos[index].done;
  setToDos(newToDos);
};
```
This code toggles the done property of a task when the checkbox next to it is clicked.

</details>
<details>
<summary>Removing a task from the list</summary>

```jsx
const handleDelete = (index) => {
  const newToDos = [...ToDos];
  newToDos.splice(index, 1);
  setToDos(newToDos);
};
```
This code removes a task from the tasks array when the "Delete" button next to it is clicked.

</details>


</details>

<details>
<summary>What happened the third day</summary>

# First thing First
My girlfriend saw the app and wanted one for herself... and with color choices specific for her. i'm not responsible for the girly theme. 

For that i changed the CSS framework newCSS for Tailwind which offers more possibilities.


# Todo.jsx

This is a file containing code for a "Todo" component in a web application. The "Todo" component allows users to add, edit, and delete tasks that they need to complete.

## Getting Started

The code begins by importing necessary dependencies from React, including `useRef`, `useState`, and `useEffect`. It also imports a `Slugify` component, a `uuidv4` function from the `uuid` package, and two custom components, `Table` and `Calendar`. These dependencies allow the component to function properly.

The `TodoList` component is then created. This component contains the logic for the "Todo" functionality. It starts by getting any previously saved "todos" from local storage using the `useEffect` hook. If any "todos" are found, they are loaded into the state. 

Next, the component sets up a datepicker with `react-tailwindcss-datepicker`. The `useState` hook is used to keep track of the selected date or date range and the placeholder text. 

After that, the `useRef` hook is used to create a reference to the input field for adding a new "todo". 

There are two more `useEffect` hooks used in the code. One saves any changes to the "todos" state to local storage, and the other updates the placeholder text when the date or date range is changed. 

The `handleSubmitForm` function is called when the user submits the form for adding a new "todo". It checks that all required fields are filled out and then creates a new "todo" object using the `uuidv4` function to generate a unique ID. This new "todo" is then added to the existing "todos" using the `setToDos` function. 

The `handleChecked` function is called when the user checks or unchecks a "todo" from the list. It updates the `done` property of the "todo" object with the new status. 

Finally, the `handleDelete` function is called when the user deletes a "todo" from the list. It removes the "todo" from the "todos" state using the `splice` method.

## Usage

This component can be used in a web application to create a "Todo" functionality, where users can add, edit, and delete tasks that they need to complete. It uses a simple form for adding new tasks and provides a way to check off completed tasks and delete tasks that are no longer needed.

To use this component in a web application, import it using `import TodoList from './Todo.jsx'` and include it in the JSX code where you want the "Todo" functionality to be displayed.

# Table.jsx

This file contains code for a `Table` component in a web application that displays a list of "todos" that the user has added. 

## Getting Started

The component takes in three props: `ToDos`, `handleChecked`, and `handleDelete`. `ToDos` is an array of all the "todos" that the user has added. `handleChecked` is a function that updates the `done` property of a "todo" when the user checks or unchecks the corresponding checkbox. `handleDelete` is a function that deletes a "todo" from the list when the user clicks the corresponding delete button.

## Usage

The `Table` component is used to display the list of "todos" that the user has added. It creates a table with five columns: "Done?", "Description", "Start Date", "End Date", and "Delete". Each row in the table represents a "todo" that the user has added.

The `daysBeforeDeadline` function is used to calculate how many days are left before the "todo" is due. If the "todo" is due in the future, it will display the number of days remaining until the due date. If the "todo" is due today, it will display "today". If the due date has already passed, it will display the number of days since the due date.

The `isEven` function is used to determine whether the index of a row in the table is even or odd. This is used to alternate the background color of each row.

The `Table` component maps over the `ToDos` array and creates a row in the table for each "todo". Each row contains a checkbox that the user can check or uncheck to mark the "todo" as done, the description of the "todo", the start date, the end date, and a delete button. The description, start date, and end date are displayed with strikethrough text if the "todo" has been marked as done.

To use this component in a web application, import it using `import Table from './Table.jsx'` and include it in the JSX code where you want the list of "todos" to be displayed.
</details>