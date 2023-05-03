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