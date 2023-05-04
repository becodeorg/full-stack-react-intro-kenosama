//importing the necessary dependencies from React
import { useRef, useState, useEffect } from "react";
import Slugify from "./Components/Shared/Slugify";
import { v4 as uuidv4 } from "uuid";
import Datepicker from "react-tailwindcss-datepicker"; 

const LSKEY = "MyTodoApp";
//Creating the TodoList Component
const TodoList = () => {
  //Get doc from localStorage
useEffect(() => {
  // Get the todos from the local storage
  const storedToDos = JSON.parse(localStorage.getItem(LSKEY + ".ToDos")) || [];
  // If there are stored todos, update the state with them
  if (storedToDos.length > 0) setToDos(storedToDos);
}, []);

//datepicker config
const [value, setValue] = useState({
  startDate: new Date(),
  endDate: new Date().setMonth(11),
}); 
const handleValueChange = (newValue) => {
  console.log("newValue:", newValue);
  setValue(newValue);
}; 

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
      <div id="container">
        <form onSubmit={handleSubmitForm}>
          <div id="labed-input" className="mb-2 w-auto">
            <label className="text-slate-800 dark:text-slate-200" htmlFor={label}>{name}:</label> &nbsp;
            <input
              className="form-input px-4 rounded-lg mr-2 hover:outline hover:outline-offset-1 hover:outline-pink-300 border-slate-300 focus:ring focus:ring-pink-200 focus:border-pink-300"
              type={type}
              name={name}
              id={Slugify(name)}
              ref={contentRef}
              placeholder={placeholder}
            />
          </div>
          <Datepicker
            value={value}
            onChange={handleValueChange}
            primaryColor={"pink"}
            placeholder={"Choose the date/range of date needed"}
            separator={"~"}
            showShortcuts={true}
            showFooter={true}
            displayFormat={"DD/MM/YYYY"}
          />
          <div id="button" className=" self-center items-center mt-2">
            <button
              type="submit"
              className="rounded-md bg-pink-200 p-2 hover:bg-pink-500 hover:text-slate-100"
            >
              Add todo
            </button>
          </div>
        </form>
      </div>
      <div className="my-5">
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
