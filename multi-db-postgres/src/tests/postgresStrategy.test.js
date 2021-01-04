const assert = require('assert')
const Postgres = require('../db/strategies/postgres')
const Context = require('../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = { nome: 'Gaviao Negro', poder: 'flexas' }

const MOCK_HEROI_ATUALIZAR = { nome: 'Batman', poder: 'dinheiro' }



describe('Postgres Strategy', function () {
  this.timeout(Infinity)
  this.beforeAll(async function () {
    await context.connect()
    await context.delete()
    await context.create(MOCK_HEROI_ATUALIZAR)
  })
  it('PostgresSql Connection', async function () {
    const result = await context.isConnected()
    assert.strictEqual(result, true)
  })

  it('cadastrar', async function () {
    const result = await context.create(MOCK_HEROI_CADASTRAR)
    delete result.id
    assert.strictEqual(result, MOCK_HEROI_CADASTRAR)
  })
  it('listar', async function () {
    const [result] = await context.read({ nome: MOCK_HEROI_CADASTRAR.nome })
    delete result.id
    //pegar a primeira posição
    // const posicaoZero = result[0]
    // const [posicao1, posicao2] = ['primeiro'],'segundo']

    assert.strictEqual(result, MOCK_HEROI_CADASTRAR)
  })

  it('atualizar', function () {
    const [itemAtualizar] = await context.read({ nome: MOCK_HEROI_ATUALIZAR.nome })
    const novoItem = {
      ...MOCK_HEROI_ATUALIZAR, //pega tudo
      nome: 'Mulher maravilha' //atualiza somente o campo nome
    }
    /*
    No javascript tem uma técnica chamada rest/spred
    usado para mergear objetos ou separá-lo
    */
    const [result] = await context.update(itemAtualizar.id, novoItem)
    const [itemAtualizado] = await context.read({ id: itemAtualizar.id })

    assert.strictEqual(result, 1)
    assert.strictEqual(itemAtualizado.nome, novoItem.nome)
  })
  it('remover por id', async function () {
    const [item] = await context.read({})
    const result = await context.delete(item.id)
    assert.strictEqual(result, 1)
  })
})