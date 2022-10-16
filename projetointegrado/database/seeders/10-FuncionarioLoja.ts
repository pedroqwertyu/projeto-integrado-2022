import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FuncionarioLoja from 'App/Models/FuncionarioLoja'

export default class extends BaseSeeder {
  public async run () {
    await FuncionarioLoja.createMany([
      {
        idFuncionario: 1,
        idLoja: 1
      }
    ])
  }
}
