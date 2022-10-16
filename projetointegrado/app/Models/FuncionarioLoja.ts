import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class FuncionarioLoja extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public idFuncionario: number

  @column()
  public idLoja: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
