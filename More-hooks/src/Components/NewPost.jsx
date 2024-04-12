import {ACTION_TYPE} from '../App'
export default function NewPost({ state, dispatch }) {
  return (
    <div className="new-state">
      <div>
      {state.toggle?<h3>{state.name}</h3>:<h3>This Content is hidden.</h3>}
        </div>
        <button onClick={()=>dispatch({type: ACTION_TYPE.TOGGLE , payload:{id:state.id}})}>TOGGLE</button>
    </div>
  );
}
