//importing the necessary dependencies from React
import { useRef, useState, useEffect } from "react";
import Button from "./Components/Shared/Button";
import Slugify from "./Components/Shared/Slugify";
import { v4 as uuidv4 } from "uuid";

const LSKEY = "MyTodoApp";
//Creating the TodoList Component
const TodoList = () => {
  //Get doc from localStorage
  useEffect(() => {
    const storedToDos =
      JSON.parse(localStorage.getItem(LSKEY + ".ToDos")) || [];
    if (storedToDos.length > 0) setToDos(storedToDos);
  }, []);

  const [ToDos, setToDos] = useState([]);

  const contentRef = useRef();
  //variables for the form
  const type = "text";
  const name = "ToDo";
  const label = Slugify(name);
  const placeholder = "Write the Todo";

  // Save ToDos to localStorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".ToDos", JSON.stringify(ToDos));
  }, [ToDos]);

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

  const handleChecked = (index) => {
    // Make a copy of the current "ToDos" array using the spread operator.
    const newToDos = [...ToDos];
    // Toggle the "done" property of the item at the specified index.
    newToDos[index].done = !newToDos[index].done;
    // Update the "todos" state with the new array.
    setToDos(newToDos);
  };
  const handleDelete = (index) => {
    // Make a copy of the current "ToDos" array using the spread operator.
    const newToDos = [...ToDos];
    // Use the splice method to remove the item at the specified index.
    newToDos.splice(index, 1);
    // Update the "todos" state with the new array.
    setToDos(newToDos);
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
          {ToDos.map((todo, index) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                value={todo.done}
                name={Slugify(todo.text)}
                id={todo.id}
                onChange={() => handleChecked(index)}
              />
              &nbsp;
              <span
                style={{
                  textDecoration: todo.done ? "line-through" : "none",
                }}
              >
                {todo.text}
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
