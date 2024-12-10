/* eslint-disable react/prop-types */

import { memo } from "react"

export const SearchInput = memo(function SearchInput ({searchHandler}) {

    function inputHandler (event) {
        searchHandler(event.target.value)
    }
    return  <input placeholder="Поиск..." onChange={inputHandler}></input>
})