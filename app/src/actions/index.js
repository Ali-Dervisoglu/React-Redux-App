import axios from "axios";

export const FETCH_DOG_START = "FETCH_DOG_START";
export const FETCH_DOG_SUCCESS = "FETCH_DOG_SUCCESS";
export const FETCH_DOG_FAIL = "FETCH_DOG_FAIL";

export const getDog = () => dispatch => {
  dispatch({ type: FETCH_DOG_START });
  axios
    .get("https://random.dog/woof.json")
    .then(res => dispatch({ type: FETCH_DOG_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: FETCH_DOG_FAIL, payload: err.toString() })
    );
};

