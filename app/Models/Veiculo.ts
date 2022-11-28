import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Pessoa from './Pessoa'
import Estacionamento from './Estacionamento'

export default class Veiculo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public placa: string

  @column()
  public marca: string

  @column()
  public modelo: string

  @column()
  public pessoaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Estacionamento)
  public estacionamentos: HasMany<typeof Estacionamento>

  @belongsTo(() => Pessoa)
  public pessoa: BelongsTo<typeof Pessoa>
}
