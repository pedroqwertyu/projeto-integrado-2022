import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {
        idPessoa: 1,
        desconto: 15
      }
    ])
  }
}
