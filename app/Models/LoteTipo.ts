import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, } from '@ioc:Adonis/Lucid/Orm'
import Lote from './Lote'


export default class LoteTipo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tipo: string

  @column()
  public descricao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Lote)
  public lotes: HasMany<typeof Lote>

}
