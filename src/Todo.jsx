//importing the necessary dependencies from React
import { useRef, useState, useEffect } from "react";
import Slugify from "./Components/Shared/Slugify";
import { v4 as uuidv4 } from "uuid";
import Datepicker from "react-tailwindcss-datepicker";
import Table from "./Components/Table.jsx";

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
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const [placeholderText, setPlaceholderText] = useState(
    "Choose the date/range of date needed"
  );

  const isEven = (num) => {
    return num % 2 === 0;
  };

  //Table class properties
  const TrLight =
    "bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-normal text-base";
  const TrDark =
    "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-normal text-base";

  //Deadline Calculator
  function daysBeforeDeadline(endDate) {
    // Convertir la date en millisecondes depuis l'époque UNIX
    const endTime = new Date(endDate).getTime();
    // Calculer le nombre de millisecondes entre la date de fin et aujourd'hui
    const timeDiff = endTime - Date.now();
    // Calculer le nombre de jours restants avant la date de fin
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    // Déterminer le message à afficher en fonction du nombre de jours restants
    if (daysRemaining > 0) {
      return `${daysRemaining} day(s) before due`;
    } else if (daysRemaining === 0) {
      return "due date is today";
    } else {
      const daysSince = -daysRemaining;
      return `Due date was ${daysSince} ago`;
    }
  }

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

    console.log(newToDos);
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
    <div className=" h-screen">
      <div id="container">
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
            placeholder={placeholderText}
            separator={"~"}
            showShortcuts={true}
            showFooter={true}
            displayFormat={"DD/MM/YYYY"}
          />
          <div id="button" className=" self-center items-center mt-2">
            <button
              type="submit"
              className="rounded-md bg-rose-200 p-2 hover:bg-rose-500 hover:text-slate-100"
            >
              Add todo
            </button>
          </div>
        </form>
      </div>
      <Table ToDos={ToDos} handleChecked={handleChecked} handleDelete={handleDelete}/>
    </div>
  );
};
// Export the TodoList component as the default export of the module.
export default TodoList;
