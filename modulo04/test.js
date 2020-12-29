const { deepEqual, ok, deepStrictEqual } = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}

describe('Suite de manipulação de heróis', () => {
<<<<<<< HEAD
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
  })

  it('pesquisar um heroi usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR


=======
  it('pesquisar um heroi usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
>>>>>>> ac5f8b28e536d32d3f7327d46f639a59de230ded
    const [resultado] = await database.listar(expected.id)

    deepStrictEqual(resultado, expected)
  })
<<<<<<< HEAD
  it('Deve cadastrar herói, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

    deepStrictEqual(actual, expected)
  })
=======
  // it('Deve cadastrar herói, usando arquivos', async () => {
  //   const expected = DEFAULT_ITEM_CADASTRAR
  //   //
  //   ok(null, expected)
  // })
>>>>>>> ac5f8b28e536d32d3f7327d46f639a59de230ded
})