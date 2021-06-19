import { Suspense } from "react";
import poster1 from './poster1.jpg';

function List({state}) {

    return (
    <div className="app">
      {state.dataToDisplay.length && state.dataToDisplay.map(data => <Suspense><div className="movie"><img src={poster1} /><h1>{data.name}</h1></div></Suspense>)}
      {!state.dataToDisplay.length && <h1>Nothing to display, search for something else!</h1>}
    </div>
    )
}

export default List;