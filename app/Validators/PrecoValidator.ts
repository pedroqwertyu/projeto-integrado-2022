import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PrecoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    descicao: schema.string([
      rules.maxLength(100)
    ]),
    unidade: schema.number.optional(),
    valor: schema.string([
      rules.maxLength(50)
    ])
  })


  public messages: CustomMessages = {}
}
