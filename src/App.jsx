import { useRef } from 'react';
import './App.css'
import { List} from './components/List'


const data = [{task:'Task 1', id: 1}, {task:'Task 2', id: 2}, {task:'Task 3', id: 3}]
function App() {
  const style = {width: '300px', display: "flex", flexDirection: "column", justifyContent: 'space-between'};

  const inputRef = useRef(null);

  function clickHandler () {
    inputRef.current.focus();
  }
  return (
    <div style = {style}>
      <List data={data}/>
      <input ref ={inputRef} placeholder='Type here...'></input>
      <button onClick={clickHandler}>Focus</button>
    </div>
  )
}

export default App
