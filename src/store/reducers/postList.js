import { GET_POSTS } from "../actions/postList";

const initialState = [];

export function postList(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    default:
      return state;
  }
}
