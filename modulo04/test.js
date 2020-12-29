const { deepEqual, ok, deepStrictEqual } = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}

describe('Suite de manipulação de heróis', () => {
  it('pesquisar um heroi usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const [resultado] = await database.listar(expected.id)

    deepStrictEqual(resultado, expected)
  })
  // it('Deve cadastrar herói, usando arquivos', async () => {
  //   const expected = DEFAULT_ITEM_CADASTRAR
  //   //
  //   ok(null, expected)
  // })
})