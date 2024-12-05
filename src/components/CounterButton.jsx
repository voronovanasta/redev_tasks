/* eslint-disable react/prop-types */

import { memo } from "react"

export const CounterButton = memo(function CounterButton({clickHandler}) {
return <button onClick={clickHandler}>Counter</button>
})