/*
0 - obter um usuario
1 - Obter tel de usuário a partir de um id
2 - Obter o endereço do usuário pelo id
*/

//importar um módulo interno do node.js

const util = require('util')

const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario() {
  // qdo der algum problema - reject(erro)
  // qdo for sucesso - resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      // return reject(new Error('Deu ruim de verdade!'))

      return resolve({
        id: 1,
        nome: "Neo Expert JavaScript",
        dataNascimento: new Date()
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: '98765-4321',
        ddd: 61
      })
    }, 2000)
  })
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'avenida dos geeks',
      numero: 0
    })
  }, 2000)
}

//adicionar a palavra async -> automaticamente retornará uma promise
main()
async function main() {
  try {
    console.time('medida-promise')
    const usuario = await obterUsuario()
    // const telefone = await obterTelefone(usuario.id)
    // const endereco = await obterEnderecoAsync(usuario.id)
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])

    const telefone = resultado[0]
    const endereco = resultado[1]

    console.log(`
    Nome: ${usuario.nome}
    Telefone: (${telefone.ddd}) ${telefone.telefone}
    Endereco: ${endereco.rua}, ${endereco.numero}
    `)
    console.timeEnd('medida-promise')
  }
  catch (error) {
    console.log('Deu ruim', error)
  }
}

// const usuarioPromise = obterUsuario()
// //para manipular com sucesso - .then
// //para manipular erros - .catch
// usuarioPromise
//   .then(function (usuario) {
//     return obterTelefone(usuario.id)
//       .then(function resolverTelefone(result) {
//         return {
//           usuario: {
//             usuario: usuario.nome,
//             id: usuario.id
//           },
//           telefone: result
//         }
//       })
//   })

//   .then(function (resultado) {
//     const endereco = obterEnderecoAsync(resultado.usuario.id)
//     return endereco.then(function resovlerEndereco(result) {
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result
//       }
//     })
//   })
//   .then(function (resultado) {
//     console.log(`
//       Nome: ${resultado.usuario.nome}
//       Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//       Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//     `)
//   })
//   .catch(function (error) {
//     console.error('Deu ruim', error)
//   })

// obterUsuario((error, usuario) => {
//   //valores null ou vazio '' ou zero é = a false
//   if (error) {
//     console.error('Vixx deu ruim em USUARIO', error)
//     return;
//   }
//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if (error1) {
//       console.error('Vixx deu ruim em TELEFONE', error1)
//       return;
//     }
//     obterEndereco(usuario.id, function resovlerEndereco(error2, endereco) {
//       if (error2) {
//         console.error('Vixx deu ruim em ENDERECO', error2)
//         return;
//       }
//       console.log(`
//       Nome: ${usuario.nome},
//       Endereco: ${endereco.rua},${endereco.numero}
//       Telefone: (${telefone.ddd})${telefone.telefone}
//       `)
//     })
//   })
// })
// const telefone = obterTelefone(usuario.id)

// console.log('telefone: ', telefone)