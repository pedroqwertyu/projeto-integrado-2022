import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    idPessoa: schema.number([
      rules.exists({table: 'funcionarios', column: 'idPessoa'})
    ]),
    matricula: schema.number([
      rules.unique({table: 'funcionarios', column: 'matricula'})
    ]),
    salario: schema.string()
  })

  public messages: CustomMessages = {}
}
