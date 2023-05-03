import CheckBox from "./Shared/CheckedBox";
import Slugify from "./Shared/Slugify";


const ListElement = (props) => {
  const name = props.name ? props.name : "Name is missing here";
  const key = props.key ? props.key:"key is missing in the array";
  return (
    <>
      <li key={key}>
        <CheckBox value="0" name={`${Slugify(name)}isDone`} id={key}/>
        &nbsp;
        {name}
      </li>
    </>
  );
};
export default ListElement;