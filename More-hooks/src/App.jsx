import React, { useReducer, useState, useRef } from "react";
import "./App.css";
import NewPost from "./Components/NewPost";

export const ACTION_TYPE={
  ADD_POST:"addPost",
  TOGGLE:'toggle'
}
const reducer=(state,action)=>{
  switch(action.type){
    case ACTION_TYPE.ADD_POST:
      return {...state,states:[...state.states,action.payload]};
    case ACTION_TYPE.TOGGLE:
      return{...state,states:state.states.map((state)=>
        state.id===action.payload.id?{...state,toggle:!state.toggle} : state
        )}
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { states: [] });
  const [inputValue, setInputValue] = useState('');
  const ref=useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue!==''){
    const newPost = { id: Date.now(), name: inputValue, toggle: true};
    dispatch({ type: ACTION_TYPE.ADD_POST, payload: newPost });
    setInputValue('');}
    else{
      alert("please enter something")
    }
  };
  function focus(){
    ref.current.focus();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='inputs'
        ref={ref}
          placeholder='Type here....'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button type='submit'>Add</button>
      </form>

      {state.states.map((state) => (
        <NewPost key={state.id} state={state} dispatch={dispatch} />
      ))}

      <button onClick={focus}>Get back</button>
    </div>
  );
}

export default App;