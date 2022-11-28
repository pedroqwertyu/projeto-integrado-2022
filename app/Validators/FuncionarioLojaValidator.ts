import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioLojaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    funcionarioId: schema.number([
      rules.exists({table: 'funcionarios', column: 'id'})
    ]),
    lojaId: schema.number([
      rules.exists({table: 'lojas', column: 'id'})
    ]),
  })

  public messages: CustomMessages = {}
}
