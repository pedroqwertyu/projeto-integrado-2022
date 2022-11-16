import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Veiculo from './Veiculo'
import Preco from './Preco'

export default class Estacionamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public idVeiculo: number

  @column()
  public dateInicio: Date

  @column()
  public dateFim: Date

  @column()
  public idPreco: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Veiculo)
  public veiculo: BelongsTo<typeof Veiculo>

  @belongsTo(() => Preco)
  public preco: BelongsTo<typeof Preco>
}
