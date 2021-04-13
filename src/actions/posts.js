import { APIUrls } from '../helpers/urls';
import { UPDATE_POSTS } from './actionTypes';
export function fetchPosts() {
  return (dispatch) => {
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    // const url =    'https://developers.facebook.com/docs/graph-api/reference/page-post/'
    //  const url =  'http://codeial.com:8000/api/v2/posts/?page=e1&limit=1';
    // const url = 'https://api.github.com/users';
    const url = APIUrls.fetchPosts(); 
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('response', data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
