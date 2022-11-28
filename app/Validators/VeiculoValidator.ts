import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VeiculoValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    placa: schema.string([
      rules.maxLength(10)
    ]),
    marca: schema.string.optional([
      rules.maxLength(50)
    ]),
    modelo: schema.string.optional([
      rules.maxLength(50)
    ]),
    idPessoa: schema.number([
      rules.exists({ table: 'pessoas', column: 'id' })
    ])
  })


  public messages: CustomMessages = {}
}
