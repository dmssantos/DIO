const params = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

const url = "http://localhost:3000"

function getNews (subject) {
  return fetch(`${url}/${subject}`, params)
    .then((response) => response.json())
    .catch((err) => {
      console.error('Ocorreu um erro', err)
    })
}

export default {
  getNews
}