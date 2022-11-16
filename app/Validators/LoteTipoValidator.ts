import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoteTipoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    tipo: schema.string([
     rules.maxLength(10)
    ]),
    descricao: schema.string([
      rules.maxLength(50)
    ])
  })

  public messages: CustomMessages = {}
}
