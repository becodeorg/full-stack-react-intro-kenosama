import Slugify from "./Slugify";
import  { useRef } from "react";

const FormInput = (props) => {
  const type = props.type ? props.type : "text"; 
  const name = props.name ? props.name: " ";
  const label = props.label ? props.label: Slugify(name);
  const placeholder = props.placeholder ? props.placeholder: "";
  
  return (
    <>
      <label htmlFor={label}>{name}:</label> &nbsp;
      {type === "textarea" ? (
        <textarea
          name={name}
          id={Slugify(name)}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={Slugify(name)}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default FormInput;
