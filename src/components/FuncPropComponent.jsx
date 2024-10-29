/* eslint-disable react/prop-types */
function FuncPropComponent ({clickHandler})  {
    return (
    <button onClick = {()=>clickHandler()}>
       Delete
    </button>
    
    )
}

export default FuncPropComponent;