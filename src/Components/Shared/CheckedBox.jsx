const CheckBox =(props) =>{
    const value = props.value ? props.value:'0';
    const name = props.name ? props.name:'';
    const id = props.id ? props.id:'';



    return(
        <>
        <input type="checkbox" value={value} name={name} id={id} />
        </>
    );
};

export default CheckBox;