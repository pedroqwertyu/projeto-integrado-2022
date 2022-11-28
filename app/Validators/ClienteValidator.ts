import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    idPessoa: schema.number([
      rules.exists({ table: 'pessoas', column: 'id' })
    ]),
    desconto: schema.string([
      rules.alphaNum()
    ])
  })


  public messages: CustomMessages = {}
}
