import './App.css'
import ButtonComponent from './components/ButtonComponent';
import TextComponent from './components/TextComponent';
import InputComponent from './components/InputComponent';
import ColorChangeComponent from './components/ColorChangeComponent'

function App() {
  const style = {width: '300px',height: "200px", display: "flex", flexDirection: "column", justifyContent: 'space-between'}
  return (
    <div style = {style}>
      <ButtonComponent />
      <TextComponent />
      <InputComponent/>
      <ColorChangeComponent/>
    </div>
    // <BoolPropComponent isDay={isDay}>
    // <ObjPropComponent data={{name: 'Nastya'}}/>
    // <ArrPropComponent contacts={contacts} />
    // <FuncPropComponent clickHandler={removeContacts}/>
    // </BoolPropComponent>
  )
}

export default App
