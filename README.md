# The Todo app :) 

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