import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    userIds.forEach(id => dispatch(fetchUser(id)));
  };
};

export const fetchPosts = () => {
  //return  function(dispatch, getState) is redux-thunk functionality
  return async dispatch => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data
    });
  };
};

export const fetchUser = userId => {
  //return  function(dispatch, getState) is redux-thunk functionality
  return async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({
      type: "FETCH_USER",
      payload: response.data
    });
  };
};

//using loash and memoize
// export const fetchUser = userId => {
//   return dispatch => {
//     _fetchUser(userId, dispatch);
//   };
// };

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${userId}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// });
