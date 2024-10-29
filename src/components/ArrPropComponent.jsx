import NumberPropComponent from "./NumberPropComponent ";

/* eslint-disable react/prop-types */
function ArrPropComponent ({contacts})  {
    return <>
    <p>Your contacts (<NumberPropComponent count={contacts.length}/>): </p>
    <ul>{contacts.map(el => <li key={el.id}>{el.name} - {el.email}</li>)}
    </ul></>
}

export default ArrPropComponent;