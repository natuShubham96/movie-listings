import initialState from './initialState';

//since only perfroming one type of action, hece used if and not switch
const reducer = (state={initialState},action) => {
    if(action.type === "change") {
      let filteredData = initialState.dataToDisplay;
      if(action.payload) {
        filteredData = filteredData.filter(data => data.name.toLowerCase().indexOf(action.payload.toLowerCase())>=0);
      }
      return {dataToDisplay: filteredData, value: action.payload};
    }
    return state;
}

export default reducer;