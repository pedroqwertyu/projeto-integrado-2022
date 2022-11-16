import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Lote from './Lote'
import Funcionario from './Funcionario'

export default class Loja extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public descricao: string

  @column()
  public cnpj: string

  @column()
  public tamanho: string

  @column()
  public idLote: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Lote)
  public lote: HasOne<typeof Lote>

  @manyToMany(() => Funcionario, { pivotTable: 'funcionario_lojas' })
  public funcionario: ManyToMany<typeof Funcionario>
}
