//importing the necessary dependencies from React
import { useRef, useState } from "react";
import Button from "./Components/Shared/Button";
import ListElement from "./Components/ListElement";
import Slugify from "./Components/Shared/Slugify";

//Creating the TodoList Component
const TodoList = () => {
  //creating the array of ToDos, and the variable for the input of the form where the data will be stored.
  const [Todos, setToDos] = useState([
    {
      text: "learn React",
      todo: false,
    },
    {
      text: "Master It",
      todo: false,
    },
    {
      text: "Get a Job",
      todo: false,
    },
  ]);
  const contentRef = useRef();
  //variables for the form
  const type = "text";
  const name = "ToDo";
  const label = Slugify(name);
  const placeholder = "Write the Todo";

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const postedFormRef = contentRef.current.value;
    console.log(postedFormRef);
    const newToDos = {
      text: postedFormRef,
      done: false,
    };
    setToDos([...Todos, newToDos]);
    contentRef.current.value = "";
  };

  const handleChecked = (index) => {
    // Make a copy of the current "todos" array using the spread operator.
    const newTodos = [...Todos];
    // Toggle the "done" property of the item at the specified index.
    newTodos[index].done = !newTodos[index].done;
    // Update the "todos" state with the new array.
    setToDos(newTodos);
  };
  const handleDelete = (index) => {
    // Make a copy of the current "todos" array using the spread operator.
    const newTodos = [...Todos];
    // Use the splice method to remove the item at the specified index.
    newTodos.splice(index, 1);
    // Update the "todos" state with the new array.
    setToDos(newTodos);
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmitForm}>
          <label htmlFor={label}>{name}:</label> &nbsp;
          <input
            type={type}
            name={name}
            id={Slugify(name)}
            ref={contentRef}
            placeholder={placeholder}
          />
          <Button type="submit" text="Add todo" />
        </form>
      </div>
      <div className="container">
        <h1>The To do's</h1>
        <ul>
          {Todos.map((name, index) => (
            <li key={index}>
              <input
                type="checkbox"
                value={name.todo}
                name={Slugify(name.text)}
                id={index}
                onChange={() => handleChecked(index)}
              />
              &nbsp;
              <span
                style={{
                  textDecoration: name.done ? "line-through" : "none",
                }}
              >
                {name.text}
              </span>
              &nbsp;&nbsp;
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
// Export the TodoList component as the default export of the module.
export default TodoList;
