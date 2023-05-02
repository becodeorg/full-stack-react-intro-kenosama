//importing the necessary dependencies from React
import React , { useState } from "react";
import CustomInput from "./Components/FormInput";
import Button from "./Components/Button";
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
                <li>
                    <input type="checkbox" value="0" name="isdone" id="" />
                </li>
            </ul>
        </div>
      </div>
    );

};
// Export the TodoList component as the default export of the module.
export default TodoList;