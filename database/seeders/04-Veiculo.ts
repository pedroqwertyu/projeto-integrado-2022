import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Veiculo from 'App/Models/Veiculo'

export default class extends BaseSeeder {
  public async run () {
    await Veiculo.createMany([
      {
        placa: 'JHH-3489',
        marca: 'Nissan',
        modelo: 'GT-R R34 2002',
        pessoaId: 1
      }
    ])
  }
}
