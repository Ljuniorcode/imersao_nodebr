const Commander = require("commander")
const Database = require("./database")
const Heroi = require("./heroi")


async function main() {
  Commander
    .version("v1")
    .option("-n, --nome [value]", "Nome do Heroi")
    .option("-p, --poder [value]", "Poder do Heroi")
    .option("-i, --id [value]", "ID do Heroi")


    .option("-c, --cadastrar [value]", "Cadastrar um Heroi")
    .option("-l, --listar [value]", "Listar um Heroi")
    .option("-r, --remover [value]", "Remover um Heroi pelo ID")


    .parse(process.argv)

  const heroi = new Heroi(Commander)

  try {
    if (Commander.cadastrar) {
      const resultado = await Database.cadastrar(heroi)
      if (!resultado) {
        console.error("Heroi não foi cadastrado")
        return
      }
      console.log("Heroi cadastrado com sucesso")
    }

    if (Commander.listar) {
      const resultado = await Database.listar()
      console.log(resultado)
      return
    }

    if (Commander.remover) {
      const resultado = await Database.remover(heroi.id)
      if (!resultado) {
        console.error('Não foi possível remover o heroi')
        return
      }
      console.log('Heroi removido com sucesso')
    }

  } catch (error) {
    console.error("Deu ruim", error)
  }
}

main()