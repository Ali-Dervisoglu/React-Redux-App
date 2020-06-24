import {
    FETCH_DOG_START,
    FETCH_DOG_SUCCESS,
    FETCH_DOG_FAIL
  } from "../actions";
  
  const initialState = {
    dog: "",
    error: "",
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    console.log("reducer", action);
    switch (action.type) {
      case FETCH_DOG_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCH_DOG_SUCCESS:
        return {
          ...state,
          dog: action.payload,
          isFetching: false,
          error: ""
        };
      case FETCH_DOG_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;
  