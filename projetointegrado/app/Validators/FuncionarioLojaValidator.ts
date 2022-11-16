import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioLojaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    idFuncionario: schema.number([
      rules.exists({table: 'funcionario_lojas', column: 'idFuncionario'})
    ]),
    idLoja: schema.number([
      rules.exists({table: 'funcionario_lojas', column: 'idLoja'})
    ]),
  })

  public messages: CustomMessages = {}
}
