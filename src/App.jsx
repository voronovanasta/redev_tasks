import { useState } from 'react';
import { SearchInput} from './components/SearchInput';
import { ItemList } from './components/ItemList';
import { CounterButton } from './components/CounterButton';
import { useCallback } from 'react';
import './App.css'

const data = [];

for (let i = 1; i <= 1001; i++) {
  data.push({
      id: i,
      text: "text" + i
  });
}

function App() {
  const [searchWord, setSearchWord] = useState('');
  const [counter, setCounter] = useState(0);

  const searchHandler = useCallback((word) => {
    setSearchWord(word)
  }, [])

  const counterHandler = useCallback(() => {
    setCounter(c => c + 1)
  }, []) 

  console.log(counter)
  return (
    <div className = "parent">
      <CounterButton clickHandler={counterHandler}/>
      <SearchInput  searchHandler={searchHandler}/> 
      <ItemList data={data} searchWord={searchWord}/>
    </div>
  )
}

export default App
