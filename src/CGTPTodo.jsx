// Import the necessary dependencies from React.
import React, { useState } from "react";
import FormInput from "./Components/FormInput";
import Button from "./Components/Shared/Button";

// Define a functional component called TodoList.
function TodoList() {
  // Declare a state variable called "todos" using the useState hook.
  // Initialize it to an empty array.
  const [todos, setTodos] = useState([]);

  // Define a function called "handleDelete" that takes an index as its argument.
  const handleDelete = (index) => {
    // Make a copy of the current "todos" array using the spread operator.
    const newTodos = [...todos];
    // Use the splice method to remove the item at the specified index.
    newTodos.splice(index, 1);
    // Update the "todos" state with the new array.
    setTodos(newTodos);
  };

  // Define a function called "handleCheck" that takes an index as its argument.
  const handleCheck = (index) => {
    // Make a copy of the current "todos" array using the spread operator.
    const newTodos = [...todos];
    // Toggle the "done" property of the item at the specified index.
    newTodos[index].done = !newTodos[index].done;
    // Update the "todos" state with the new array.
    setTodos(newTodos);
  };

  // Define a function called "handleAddTodo" that takes an event as its argument.
  const handleAddTodo = (event) => {
    // Prevent the default form submission behavior.
    event.preventDefault();
    // Create a new todo object with a "text" property set to the value of the input field,
    // and a "done" property set to false.
    const newTodo = {
      text: event.target.elements.todo.value,
      done: false,
    };
    // Add the new todo object to the end of the current "todos" array, and update the state.
    setTodos([...todos, newTodo]);
    // Clear the input field by setting its value to an empty string.
    event.target.elements.todo.value = "";
  };

  // Return the JSX markup for the TodoList component.
  return (
    <div>
      {/* Render a form element that triggers "handleAddTodo" on submit. */}
      <form onSubmit={handleAddTodo}>
        <FormInput type="text" name="ToDo" placeholder="test" />
        <br />
        <Button type="submit" text="Add new Todo" />
      </form>
      {/* Render an unordered list of todo items, mapped from the "todos" state. */}
      <ul>
        {todos.map((todo, index) => (
          // Each todo item is a list item with a unique key set to its index.
          <li key={index}>
            {/* Render a checkbox with its "checked" attribute set to the "done" property of the current todo item. */}
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleCheck(index)}
            />
            {/* Render the "text" property of the current todo item, with a "line-through" style if the "done" property is true. */}
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            {/* Render a button to delete the current todo item. */}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
// Export the TodoList component as the default export of the module.
export default TodoList;