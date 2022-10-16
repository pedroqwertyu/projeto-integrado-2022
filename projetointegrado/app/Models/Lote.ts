import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Lote extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public area: string

  @column()
  public valor: string

  @column()
  public dataContrato: Date

  @column()
  public idLoteTipo: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
