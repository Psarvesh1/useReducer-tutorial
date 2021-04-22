import logo from './logo.svg';
import './App.css';
import React from 'react'
import Counter from './components/Counter'
// import Counter2 from './components/Counter2'
// import Counter3 from './components/Counter3'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'


//context ka code

export const countContext = React.createContext()

//reducer ka code
const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        case 'default':
            return state
    }
}

function App() {
  const [name, setName] = React.useState()
  const [count, dispatch] = React.useReducer(reducer, initialState)
  return (
    <countContext.Provider value = {{countState: count, countDispatch: dispatch}}>
    <div className="App">
      {count}
      <ComponentA />
      <ComponentB />
    </div>
    </countContext.Provider>
  );
}

export default App;
