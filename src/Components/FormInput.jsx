import Slugify from "./Slugify";

const CustomInput = (props) => {
  const type = props.type ? props.type : "text"; 
  const name = props.name ? props.name: "";
  const value = props.value ? props.value: "";
  const label = props.label ? props.label: Slugify(name);
  const placeholder = props.placeholder ? props.placeholder: "";
  
  
  return (
    <div>
      <label htmlFor={label}>{name}:</label> &nbsp;
      {type === "textarea" ? (
        <textarea name={name} id={Slugify(name)} placeholder={placeholder}>
          {value}
        </textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={Slugify(name)}
          placeholder={placeholder}
          value={value}
        />
      )}
    </div>
  );
};

export default CustomInput;
