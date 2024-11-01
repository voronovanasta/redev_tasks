import { useState } from "react";

function TextComponent ()  {
    const text = 'This text can be hidden by clicking the button below.'
    const [isHidden, setIsHidden]= useState(false);
     const clickHandler = () => {
        setIsHidden(isHidden => !isHidden)
     }
     
    return (
    <>
    {isHidden && text}
    <button onClick = {clickHandler}>
       {!isHidden ? "Show text" : "Hide text"}
    </button>
    </>
    )
}

export default TextComponent;