/* eslint-disable react/prop-types */

export function List ({data}) {

    function clickhandler (event) {
        event.target.parentElement.innerHTML = '!!!' + event.target.parentElement.innerHTML
    }
    return  <div>
        {data.map((el)=> <li  key={el.id}>
            {el.task}
        <button onClick = {clickhandler}>Click</button>
        </li>)}

    </div>
}