import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  console.log('action.type' + action.type);
  switch (action.type) {
    case FETCH_POSTS:
      console.log('fetch posts postReducer');
      return { ...state, items: action.payload };
    default:
      console.log('default');

      return state;
  }
}
