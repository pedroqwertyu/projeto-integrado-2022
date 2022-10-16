import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Preco from 'App/Models/Preco'

export default class extends BaseSeeder {
  public async run() {
    await Preco.createMany([
      {
        descricao: 'Celular iPhone 14 Pro Max',
        unidade: 2,
        valor: 'R$14.000,00'
      }
    ])
  }
}
