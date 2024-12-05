/* eslint-disable react/prop-types */

export function SearchInput ({searchHandler}) {

    function inputHandler (event) {
        searchHandler(event.target.value)
    }
    return  <input placeholder="Поиск..." onChange={inputHandler}></input>
}