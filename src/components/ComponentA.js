import React from 'react'
import {countContext} from '../App'
export default function ComponentA() {
    const countCont = React.useContext(countContext)
    return (
        <div>
            ComponentA {countCont.countState}
            <button onClick = {()=>countCont.countDispatch('increment')}>Increment</button>
            <button onClick = {()=>countCont.countDispatch('decrement')}>Decrement</button>
            <button onClick = {()=>countCont.countDispatch('reset')}>Reset</button>
        </div>
    )
}
