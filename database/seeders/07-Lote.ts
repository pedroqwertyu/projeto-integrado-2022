import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Lote from 'App/Models/Lote'

export default class extends BaseSeeder {
  public async run () {
    await Lote.createMany([
      {
        area: '300m²',
        valor: 'R$10.000,00',
        contrato: new Date(2022,15,2),
        loteTipoId: 1
      }
    ])
  }
}
