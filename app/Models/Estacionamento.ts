import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Veiculo from './Veiculo'
import Preco from './Preco'

export default class Estacionamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public veiculoId: number

  @column()
  public inicio: Date

  @column()
  public fim: Date

  @column()
  public precoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Veiculo)
  public veiculo: BelongsTo<typeof Veiculo>

  @belongsTo(() => Preco)
  public preco: BelongsTo<typeof Preco>
}
