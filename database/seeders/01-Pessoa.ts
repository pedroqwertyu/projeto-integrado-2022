import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pessoa from 'App/Models/Pessoa'

export default class extends BaseSeeder {
  public async run() {
    await Pessoa.createMany([
      {
        nome: 'Rodrigo Vale',
        cpf: '04254692303',
        email: 'rodrigovale170@gmail.com',
        telefone: 998672775,
        endereco: 'QNM 40 Conjunto P casa 12',
        tipo: 'PF'
      }
    ])
  }
}
