import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Loja from './Loja'
import LoteTipo from './LoteTipo'

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
  public idLoteTipo: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Loja)
  public loja: BelongsTo<typeof Loja>

  @manyToMany(() => LoteTipo, { pivotTable: 'lote_tipos' })
  public lotetipo: ManyToMany<typeof LoteTipo>
}
