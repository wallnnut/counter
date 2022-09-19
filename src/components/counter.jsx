import React, {useState} from "react";

const Counter = (props) => {
  const {value} = props
  
    // const [value, setValue] = useState(props.value)

    const formatValue = () => {
        return value === 0 ? "empty" : value 
    }
    const getBageClasses = () => {
        let classes = "badge m-2 ";
        return classes += value === 0 ? 'bg-warning' : 'bg-primary'
    }
    const handleIncrement = () => {
      console.log("handleIncrement")
      // setValue((prevState) => prevState + 1)
    }

    const handleDecrement = () => {
      console.log('handleDecrement')
      // if (value !== 0) setValue(value - 1)
    }
    return (
      <div >
        <span>{props.name}</span>
        <span className= { getBageClasses() }> { formatValue() } </span>
        <button className="btn btn-primary btn-sm m-2" onClick={() => props.OnIncrement(props.id)}>+</button>
        <button className="btn btn-primary btn-sm m-2" onClick={() => props.OnDecrement(props.id)}>-</button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
      </div>
    );
  };

  export default Counter