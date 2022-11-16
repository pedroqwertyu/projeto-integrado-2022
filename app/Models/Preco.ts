import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Estacionamento from './Estacionamento'

export default class Preco extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @column()
  public unidade: number

  @column()
  public valor: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Estacionamento)
  public estacionamento: HasMany<typeof Estacionamento>
}
