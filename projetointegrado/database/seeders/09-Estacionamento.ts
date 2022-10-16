import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Estacionamento from 'App/Models/Estacionamento'

export default class extends BaseSeeder {
  public async run() {
    await Estacionamento.createMany([
      {
        idVeiculo: 1,
        dateInicio: new Date(2022, 15, 2),
        dateFim: new Date(2022, 15, 3),
        idPreco: 1
      }
    ])
  }
}
