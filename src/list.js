import { Suspense } from "react";

function List({state}) {

  //using try catch as require will fail for unavailable path
  const imageSource = (src) => {
       try {
         return require(`./${src}`).default;
       }
       catch (e) {
         return require('./placeholder_for_missing_posters.png').default; 
       }
  }

  //displaying list when data present and not available text when nothing to display
  return (
    <div className="app">
      {state.dataToDisplay.length && state.dataToDisplay.map(data => <Suspense key={Math.random()}><div className="movie"><img src={imageSource(data['poster-image'])} alt="" style={{height: "26.5vh", width: "24.5vw"}} /><h1>{data.name}</h1></div></Suspense>)}
      {!state.dataToDisplay.length && <h1>Nothing to display, search for something different!</h1>}
    </div>
  )
}

export default List;