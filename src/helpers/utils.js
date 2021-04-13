export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedVal = encodeURIComponent(params[property]);
    formBody.push(encodedKey + '=' + encodedVal);
  }
  return formBody.join('&');
}

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem('token');
}
