import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Funcionario from './Funcionario'
import Veiculo from './Veiculo'

export default class Pessoa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public email: string

  @column()
  public telefone: number

  @column()
  public endereco: string

  @column()
  public tipo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Cliente)
  public clientes: HasMany<typeof Cliente>

  @hasMany(() => Funcionario)
  public funcionarios: HasMany<typeof Funcionario>

  @hasMany(() => Veiculo)
  public veiculos: HasMany<typeof Veiculo>
}
