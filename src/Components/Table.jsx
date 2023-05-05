import React from "react";
import Slugify from "./Shared/Slugify";

const Table = ({ ToDos, handleChecked, handleDelete }) => {
  
  //calculate if the index is even or not :)
    const isEven = (num) => {
    return num % 2 === 0;
  };

  //Table class properties
  const TrLight =
    "bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-100 font-normal text-base border border-slate-500";
  const TrDark =
    "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-normal text-base border border-slate-500";

  //Deadline Calculator
  function daysBeforeDeadline(end) {
    // Convertir la date en millisecondes depuis l'époque UNIX
    const endTime = new Date(end).getTime();
    // Calculer le nombre de millisecondes entre la date de fin et aujourd'hui
    const timeDiff = endTime - Date.now();
    // Calculer le nombre de jours restants avant la date de fin
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    // Déterminer le message à afficher en fonction du nombre de jours restants
    if (daysRemaining > 0) {
      return `${daysRemaining} day(s) to go`;
    } else if (daysRemaining === 0) {
      return "today";
    } else {
      const daysSince = -daysRemaining;
      return `${daysSince} day(s) ago`;
    }
  }

  return (
    <div className="my-5  border border-gray-100 py-6 z-0">
      <h1 className=" text-2xl font-bold underline underline-offset-4 mb-4 text-gray-950 dark:text-gray-50 ml-4">
        "List of To Do's"
      </h1>
      <table className="w-screen table-auto border-separate border-spacing-2 border border-slate-500">
        <thead className=" bg-pink-100 dark:bg-pink-800 text-gray-950 dark:text-gray-50">
          <tr>
            <th>Done?</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-gray-950 dark:text-gray-50">
          {ToDos.map((todo, index) => (
            <tr key={index}>
              <th className={isEven(index) ? TrLight : TrDark}>
                <input
                  type="checkbox"
                  value={todo.done}
                  name={Slugify(todo.title)}
                  id={todo.id}
                  onChange={() => handleChecked(index)}
                />
              </th>
              <th className={isEven(index) ? TrLight : TrDark}>
                <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
              </th>
              <th className={isEven(index) ? TrLight : TrDark}>
                <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "none",
                  }}
                >
                  {daysBeforeDeadline(todo.start)}
                </span>
              </th>
              <th className={isEven(index) ? TrLight : TrDark}>
                <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "none",
                  }}
                >
                  {daysBeforeDeadline(todo.end)}
                </span>
              </th>
              <th>
                <button
                  onClick={() => handleDelete(index)}
                  className="p-2 bg-rose-500 rounded-xl border border-red-950 my-1 text-gray-50"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
