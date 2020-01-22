import { FETCH_POSTS, NEW_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  console.log('fitch');

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const NewPosts = post => dispatch => {
  console.log('NewPosts');

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
