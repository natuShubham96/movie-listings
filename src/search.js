import { useReducer } from "react";
import initialState from "./initialState";
import reducer from "./reducer";
import Back from './Back.png';
import search from './search.png';

function Search({state, dispatch}) {

    return (
        <div className="searchBox">
        <img src={Back} />
        <textarea onChange={(event) => dispatch({type: "change", payload: event.target.value})} style={{backgroundColor: 'black', border: 'none', color: 'white', width: '70%', height: '60px', fontSize: '38px'}} value={state.value} placeholder="Romantic Comedy"></textarea>
        <img src={search} />
        </div>
    )
}

export default Search;