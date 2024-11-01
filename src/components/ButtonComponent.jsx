import { useState } from "react";

function ButtonComponent ()  {
    const [count, setCount] = useState(0);
     const clickHandler = () => {
        setCount(prevCount => prevCount + 1)
     }
     
    return (
    <button onClick = {clickHandler}>
       {count}
       <br></br>
       Press
    </button>
    )
}

export default ButtonComponent;