const CustomInput = ({type, name, placeholder }) => {

  const slugify = (string) => {
    const newText = string
      .toLowerCase()
      .replace(/ /g, "_")
      .replace(/[^\w-]+/g, "");

    return newText;
  };
  return (
    <div>
      <label htmlFor={slugify(name)}>{name}:</label> &nbsp;
      <input type={type} id={slugify(name)} placeholder={placeholder} />
    </div>
  );
};

export default CustomInput;
