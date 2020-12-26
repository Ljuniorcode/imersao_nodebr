/*
0 - obter um usuario
1 - Obter tel de usuário a partir de um id
2 - Obter o endereço do usuário pelo id
*/

function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: 'Neo Expert JavaScript',
      dataNascimento: new Date()
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '98765-4321',
      ddd: 61
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'avenida dos geeks',
      numero: 0
    })
  }, 2000)
}

function resolverUsuario(erro, usuario) {
  console.log('usuario: ', usuario)
}

obterUsuario((error, usuario) => {
  //valores null ou vazio '' ou zero é = a false
  if (error) {
    console.error('Vixx deu ruim em USUARIO', error)
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error('Vixx deu ruim em TELEFONE', error1)
      return;
    }
    obterEndereco(usuario.id, function resovlerEndereco(error2, endereco) {
      if (error2) {
        console.error('Vixx deu ruim em ENDERECO', error2)
        return;
      }
      console.log(`
      Nome: ${usuario.nome},
      Endereco: ${endereco.rua},${endereco.numero}
      Telefone: (${telefone.ddd})${telefone.telefone}
      `)
    })
  })
})
// const telefone = obterTelefone(usuario.id)

// console.log('telefone: ', telefone)