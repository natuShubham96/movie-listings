import initialState from './initialState';

const reducer = (state,action) => {
    if(action.type === "change") {
      let filteredData = initialState.dataToDisplay;
      if(action.payload) {
        filteredData = filteredData.filter(data => data.name.toLowerCase().indexOf(action.payload.toLowerCase())>=0);
      }
      return {dataToDisplay: filteredData, value: action.payload};
    }
    return initialState;
  }

  export default reducer;