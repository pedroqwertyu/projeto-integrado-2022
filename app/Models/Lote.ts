import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import LoteTipo from './LoteTipo'
import Loja from './Loja'

export default class Lote extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public area: string

  @column()
  public valor: string

  @column()
  public contrato: Date

  @column()
  public loteTipoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => LoteTipo)
  public loteTipo : BelongsTo<typeof LoteTipo>

  @hasMany(() => Loja)
  public lojas: HasMany<typeof Loja>
}
