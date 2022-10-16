import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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
}
