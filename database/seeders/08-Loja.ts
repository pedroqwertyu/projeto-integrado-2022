import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Loja from 'App/Models/Loja'

export default class extends BaseSeeder {
  public async run () {
    await Loja.createMany([
      {
        nome:'Centauro',
        descricao: 'Loja de artigos Esportivos',
        cnpj: '34803270913',
        tamanho: 'Loja grande',
        idLote: 1
      }
    ])
  }
}
