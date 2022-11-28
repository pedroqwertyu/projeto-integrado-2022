import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Pessoa from './Pessoa'
import Loja from './Loja'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public idPessoa: number

  @column()
  public matricula: number

  @column()
  public salario: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Pessoa)
  public pessoa: BelongsTo<typeof Pessoa>

  @manyToMany(() => Loja, { pivotTable: 'funcionario_lojas' })
  public lojas: ManyToMany<typeof Loja>
}
