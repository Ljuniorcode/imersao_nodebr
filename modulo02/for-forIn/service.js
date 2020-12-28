const axios = require('axios')
const URL = `https//swapi.dev/`

async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}`
  const response = await axios.get(url)
  return response.data
}

module.exports = {
  obterPessoas,
}