export function getFormBody(params) {
    let formBody = []

    for(let property in params){
        let encodedKey = encodedURIComponent(property);
        let encodedVal = encodedURIComponent(params[property])
        formBody[encodedKey + '=' + encodedVal];
    }
    return formBody.join('&');
}