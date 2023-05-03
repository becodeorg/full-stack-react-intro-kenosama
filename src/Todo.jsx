//importing the necessary dependencies from React
import { useRef } from "react";
import Button from "./Components/Shared/Button";
import ListElement from "./Components/ListElement"
import Slugify from "./Components/Shared/Slugify";
//Creating the TodoList Component
const TodoList= () =>{

  //creating the array of ToDos, and the variable for the input of the form where the data will be stored.
  const Todos = ["learn React", "Master it", "get a job"];
  const contentRef = useRef();
  //variables for the form
  const type = "text";
  const name = "ToDo";
  const label = Slugify(name);
  const placeholder = "Write the Todo";

  const handleSubmitForm = (e)=>{
    e.preventDefault();
    const postedFormRef = contentRef.current.value
    console.log(postedFormRef)
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
          <h1>The Todos</h1>
          <ul>
            {Todos.map((todo) => (
              <ListElement name={todo} />
            ))}
          </ul>
        </div>
      </div>
    );

};
// Export the TodoList component as the default export of the module.
export default TodoList;