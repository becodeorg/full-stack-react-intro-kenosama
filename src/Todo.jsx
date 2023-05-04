//importing the necessary dependencies from React
import { useRef, useState, useEffect } from "react";
import Slugify from "./Components/Shared/Slugify";
import { v4 as uuidv4 } from "uuid";
import Datepicker from "react-tailwindcss-datepicker";
import Table from "./Components/Table.jsx";
import Calendar from "./Components/Calendar.jsx";

const LSKEY = "MyTodoApp";
//Creating the TodoList Component
const TodoList = () => {
  //Get doc from localStorage
  useEffect(() => {
    // Get the todos from the local storage
    const storedToDos =
      JSON.parse(localStorage.getItem(LSKEY + ".ToDos")) || [];
    // If there are stored todos, update the state with them
    if (storedToDos.length > 0) setToDos(storedToDos);
  }, []);

  //datepicker config
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const [placeholderText, setPlaceholderText] = useState(
    "Choose the date/range of date needed"
  );

  //UseState for the ToDos
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

    const todoText = contentRef.current.value;
    const startDate = value.startDate;
    const endDate = value.endDate;

    if (!todoText || !startDate || !endDate) {
      // Display an error message to the user
      alert("Please fill out all fields and select a valid date range.");
      return;
    }

    const id = uuidv4();
    const newToDos = {
      text: todoText,
      done: false,
      id: id,
      startDate: startDate,
      endDate: endDate,
    };
    setToDos([...ToDos, newToDos]);

    contentRef.current.value = "";
    setValue({
      startDate: null,
      endDate: null,
    });
    setPlaceholderText("Choose the date/range of date needed");
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
    <div className=" h-screen ">
      <div
        id="container"
        className="bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 p-5 z-10 mb-4"
      >
        <form onSubmit={handleSubmitForm}>
          <div id="labed-input" className="mb-2 w-auto">
            <label
              className="text-slate-800 dark:text-slate-200"
              htmlFor={label}
            >
              {name}:
            </label>{" "}
            &nbsp;
            <input
              className="form-input px-4 rounded-lg mr-2 border-rose-300  hover:outline hover:outline-offset-1 hover:outline-rose-300 focus:ring focus:ring-rose-200 focus:border-rose-400 dark:border-rose-700    dark:hover:outline-rose-700  dark:focus:ring-rose-800 dark:focus:border-rose-800 placeholder:text-gray-400 placeholder:text-sm"
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
            primaryColor={"rose"}
            placeholder={placeholderText}
            separator={"~"}
            showShortcuts={true}
            showFooter={true}
            displayFormat={"DD/MM/YYYY"}
          />
          <div id="button" className=" self-center items-center mt-2">
            <button
              type="submit"
              className="rounded-md bg-rose-200 p-2 mt-3 hover:bg-rose-500 hover:text-slate-100  dark:bg-rose-600  dark:hover:bg-rose-500 dark:text-slate-100 font-bold"
            >
              Add todo
            </button>
          </div>
        </form>
      </div>
      {ToDos.length === 0 ? null : (
        <Table
          ToDos={ToDos}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      )}

      <Calendar />
    </div>
  );
};
// Export the TodoList component as the default export of the module.
export default TodoList;
