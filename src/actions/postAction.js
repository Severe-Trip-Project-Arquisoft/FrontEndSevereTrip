import fetch from 'isomorphic-fetch';

export function postAction(data) {
        console.log('------------------------------------------------------------------------------------------',data);
    return fetch('http://52.5.42.71:8080/posts', {
        method: 'POST',
        mode: 'CORS',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log('respuesta ',res);
        return res;
    }).catch(err => err);
}
