import './App.css'
import { LifecycleComponent, FuncComponent} from './components/LifecycleComponent'



function App() {
  const style = {width: '300px', display: "flex", flexDirection: "column", justifyContent: 'space-between'}
  return (
    <div style = {style}>
      <LifecycleComponent/>
      <FuncComponent/>
    </div>
  )
}

export default App
