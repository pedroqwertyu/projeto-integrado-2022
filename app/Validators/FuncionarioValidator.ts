import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    pessoaId: schema.number([
      rules.exists({table: 'funcionarios', column: 'id'})
    ]),
    matricula: schema.number([
      rules.unique({table: 'funcionarios', column: 'matricula'})
    ]),
    salario: schema.string()
  })

  public messages: CustomMessages = {}
}
