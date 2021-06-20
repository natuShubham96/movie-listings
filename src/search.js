import Back from './Back.png';
import search from './search.png';

function Search({state, dispatch}) {

    return (
        <div className="searchBox">
            <img src={Back} alt="" style={{height: '5vh'}}/>
            <textarea onChange={(event) => dispatch({type: "change", payload: event.target.value})} style={{backgroundColor: 'black', border: 'none', color: 'white', width: '70%', height: '5vh', fontSize: '1.5rem'}} value={state.value} placeholder="Romantic Comedy"></textarea>
            <img src={search} alt="" style={{height: '5vh'}} />
        </div>
    )
}

export default Search;