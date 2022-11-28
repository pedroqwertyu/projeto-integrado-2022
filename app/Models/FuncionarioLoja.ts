import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Loja from './Loja'
import Funcionario from './Funcionario'

export default class FuncionarioLoja extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public funcionarioId: number

  @column()
  public lojaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Funcionario)
  public funcionario : BelongsTo<typeof Funcionario>

  @belongsTo(() => Loja)
  public loja : BelongsTo<typeof Loja>
}
