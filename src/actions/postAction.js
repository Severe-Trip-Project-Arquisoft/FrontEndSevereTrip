
export function postAction(data) {        
  return fetch('http://52.5.42.71:8080/posts', {
    method: 'POST',
    mode: 'cors',
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
}
