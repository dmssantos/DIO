const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

const url = "http://localhost:3000/api"

function getNews (subject) {
  return fetch(`${url}/${subject}`, params)
    .then(response => response.json())
    .catch((err) => {
      console.error('Ocorreu um erro 1', err)
    })
}

function getNewsBy (subject, id) {
  return fetch(`${url}/${subject}/${id}`, params)
    .then((response) => response.json())
    .catch((err) => {
      console.error('Ocorreu um erro 2', err)
    })
}

export default {
  getNews,
  getNewsBy
}