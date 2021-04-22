import React,{useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState;
    }
}
export default function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Counter
            <div>
            firstState {count.firstCounter}
            <button onClick = {()=>dispatch({type: 'increment', value: 5})}>Increment</button>
            <button onClick = {()=>dispatch({type: 'decrement', value: 3})}>Decrement</button>
            <button onClick = {()=>dispatch({type:'reset'})}>Reset</button>
            </div>
            <div>
            secondState {count.secondCounter}
            <button onClick = {()=>dispatch({type: 'increment2', value: 1})}>Increment</button>
            <button onClick = {()=>dispatch({type: 'decrement2', value: 1})}>Decrement</button>
            <button onClick = {()=>dispatch({type: 'reset'})}>Reset</button>
            </div>
        </div>
    )
}
