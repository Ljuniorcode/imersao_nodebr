const { obterPessoas } = require('./service')
/*
const item = {
  nome:'student',
  idade: 37
}

const {nome} = item
console.log(nome)
*/

Array.prototype.meuFilter = function (callback) {
  const lista = []
  for (index in this) {
    const item = this[index]
    const result = callback(item, index, this) //item, index e lista completa
    //se for 0, vazio '', null ou undefined === false
    if (!result) continue;
    lista.push(item)
  }
  return lista
}

async function main() {
  try {
    const { results } = await obterPessoas(`a`)
    // const familiaLars = results.filter(item => {
    //   //por padrão precisa retornar um boolean para informar se deve
    //   //manter ou remover da lista, false - remove, true mantem
    //   //não encontrou = -1, se encontrou = posiçãoNoArray
    //   const result = item.name.toLowerCase().indexOf(`lars`) !== -1
    //   return result
    // })

    const familiaLars = results.meuFilter((item, index, lista) => {
      console.log(`index: ${index}`, lista.length)
      return item.name.toLowerCase().indexOf('lars') !== -1
    })

    const names = familiaLars.map(pessoa => pessoa.name)
    console.log(names)

  } catch (error) {
    console.error('Deu ruim', error)
  }
}

main()