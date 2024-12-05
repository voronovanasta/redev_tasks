/* eslint-disable react/prop-types */

import { memo } from "react"

export const CounterButton = memo(function CounterButton ({searchHandler}) {

    function inputHandler (event) {
        searchHandler(event.target.value)
    }
    return  <input placeholder="Поиск..." onChange={inputHandler}></input>
})