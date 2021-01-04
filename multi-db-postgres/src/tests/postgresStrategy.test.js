const assert = require('assert')
const Postgres = require('../db/strategies/postgres')
const Context = require('../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = { nome: 'Gaviao Negro', poder: 'flexas' }


describe('Postgres Strategy', function () {
  this.timeout(Infinity)
  this.beforeAll(async function () {
    await context.connect()
  })
  it('PostgresSql Connection', async function () {
    const result = await context.isConnected()
    assert.strictEqual(result, true)
  })

  it('cadastrar', async function () {
    const result = await context.create(MOCK_HEROI_CADASTRAR)

    assert.strictEqual(result, MOCK_HEROI_CADASTRAR)
  })
})