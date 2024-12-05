import { useMemo } from "react"

/* eslint-disable react/prop-types */
export function ItemList ({data, searchWord}) {
    const style =  {
        height: "400px",
        overflowY: "auto",  
        border: "1px solid #ccc",
        padding: "10px",
      }

    const filteredData = useMemo(()=> {
        return data.filter(el=> el.text.toLowerCase().includes(searchWord.toLowerCase()));
    }, [data, searchWord])

        return (
        <ul style={style}>
            {searchWord !== '' ? 
            filteredData.length > 0 ? 
            filteredData.map(el => <li key={el.id}>{el.text}</li>) : <li>Ничего не найдено</li> : 
            data.map(el => <li key={el.id}>{el.text}</li>)}
    </ul>)
   
    
}