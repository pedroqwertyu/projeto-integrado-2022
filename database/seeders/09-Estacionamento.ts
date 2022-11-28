import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Estacionamento from 'App/Models/Estacionamento'

export default class extends BaseSeeder {
  public async run() {
    await Estacionamento.createMany([
      {
        veiculoId: 1,
        inicio: new Date(2022, 15, 2),
        fim: new Date(2022, 15, 3),
        precoId: 1
      }
    ])
  }
}
