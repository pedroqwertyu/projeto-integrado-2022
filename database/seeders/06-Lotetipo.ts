import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import LoteTipo from 'App/Models/LoteTipo'

export default class extends BaseSeeder {
  public async run () {
    await LoteTipo.createMany([
      {
        tipo: 'Grande',
        descricao: 'Lote com tamanho grande'
      }
    ])
  }
}
