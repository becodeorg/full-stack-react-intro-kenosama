import CheckBox from "./Shared/CheckedBox";
import Slugify from "./Shared/Slugify";


const ListElement = (props) => {
  const name = props.name ? props.name : "Name is missing here";
  return (
    <>
      <li>
        <CheckBox value="0" name={`${Slugify(name)}isDone`} />
        &nbsp;
        {name}
      </li>
    </>
  );
};
export default ListElement;