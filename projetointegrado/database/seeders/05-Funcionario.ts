import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {
        idPessoa: 1,
        matricula: 40048,
        salario:'R$1.700,00'
      }
    ])
  }
}
