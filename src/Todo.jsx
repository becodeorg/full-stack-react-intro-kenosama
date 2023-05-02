//importing the necessary dependencies from React
import React , { useState } from "react";
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