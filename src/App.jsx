import './App.css'
import { useState } from 'react';
import ArrPropComponent from './components/ArrPropComponent';
import FuncPropComponent from './components/FuncPropComponent';
import ObjPropComponent from './components/ObjPropComponent';
import BoolPropComponent from './components/BoolPropComponent';




function App() {
  const initialContacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
  ];


  const [contacts, setContacts] = useState(initialContacts)

  const removeContacts = () => {
    setContacts([]);
  }

  const hours = new Date().getHours();
  const isDay =  hours >= 6 && hours <= 22;

  return (
    <BoolPropComponent isDay={isDay}>
    <ObjPropComponent data={{name: 'Nastya'}}/>
    <ArrPropComponent contacts={contacts} />
    <FuncPropComponent clickHandler={removeContacts}/>
    </BoolPropComponent>
  )
}

export default App
