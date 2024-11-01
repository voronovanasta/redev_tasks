import { useState } from "react";

function ColorChangeComponent ()  {
   const text = 'This text can be red or green  by clicking the button below.'
   const [IsColored, setIsColored]= useState(false);
    const clickHandler = () => {
      setIsColored(IsColored => !IsColored)
    }
    let color = IsColored ? {color: 'green'} : {color: 'red'}
   return (
   <>
   <p style = {color}>{text}</p>
   <button onClick = {clickHandler}>
      {!IsColored ? "Green" : "Red"}
   </button>
   </>
   )
}

export default ColorChangeComponent;