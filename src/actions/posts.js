import {UPDATE_POSTS} from './actionTypes';
export function fetchPosts() {
  return (dispatch) => {
    // const url = 'http://codeial.com:8000/api/v2/posts?page=1&limit1=5';
    // const url = `https://api.github.com/users/deekshasharma`;
    const url = ` https://randomuser.me/api/`;
   
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('response', data);
        dispatch(updatePosts(data.info.results));
      });
  };
}

export function updatePosts(posts){
    return {
        type: UPDATE_POSTS,
        posts
    }
}
