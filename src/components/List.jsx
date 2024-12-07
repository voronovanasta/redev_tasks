/* eslint-disable react/prop-types */

import { useState } from "react"

export function List ({data}) {

    const [list, setList] = useState(data);

    function clickhandler (index) {
       const newList = [...list].map((el, i) => {
        if(i===index) return {...el, task: '!!!' + el.task};
        return el;
       })
        setList(newList)
    }

    return  <div>
        {list.map((el, index)=> <li  key={el.id}>
            {el.task}
        <button onClick = {() => clickhandler(index)}>Click</button>
        </li>)}

    </div>
}