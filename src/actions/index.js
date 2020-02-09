import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  //return  function(dispatch, getState) is redux-thunk functionality
  return async dispatch => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response
    });
  };
};
