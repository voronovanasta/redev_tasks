import { useState } from "react";

function InputComponent ()  {
    const [value, setValue] = useState('');
     const clickHandler = (value) => {
        setValue(value)
     }
     
    return (
    <>
    <input onChange = {(e) => clickHandler(e.target.value)}>
    </input>
    {value}
    </>
    )
}

export default InputComponent;