<<<<<<< HEAD
const { readFile, writeFile } = require('fs')
=======
const { readFile } = require('fs')
>>>>>>> ac5f8b28e536d32d3f7327d46f639a59de230ded

const { promisify } = require('util')

const readFileAsync = promisify(readFile)
<<<<<<< HEAD
const writeFileAsync = promisify(writeFile)
=======
>>>>>>> ac5f8b28e536d32d3f7327d46f639a59de230ded

//outra forma de obter dados do json
//const dadosJson = require('./herois.json')

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json'
  }

  async obterDadosArquivo() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
    return JSON.parse(arquivo.toString())
  }

<<<<<<< HEAD
  async escreverArquivo(dados) {
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
    return true
  }

  async cadastrar(heroi) {
    const dados = await this.obterDadosArquivo()
    const id = heroi.id <= 2 ? heroi.id : Date.now()
    const heroiComId = {
      id,
      ...heroi
    }

    const dadosFinal = [...dados, heroiComId]
    const resultado = await this.escreverArquivo(dadosFinal)
    return resultado
=======
  escreverArquivo() {
>>>>>>> ac5f8b28e536d32d3f7327d46f639a59de230ded

  }

  async listar(id) {
    const dados = await this.obterDadosArquivo()
    const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
    return dadosFiltrados
  }

}

module.exports = new Database()

