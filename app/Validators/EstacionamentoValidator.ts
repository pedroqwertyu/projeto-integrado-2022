import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EstacionamentoValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    veiculoId: schema.number([
      rules.exists({ table: 'estacionamentos', column: 'id' })
    ]),
    inicio: schema.date.optional({
      format: 'dd-MM-yyyy'
    }),
    fim: schema.date.optional({
      format: 'dd-MM-yyyy'
    }),
    precoId: schema.number([
      rules.exists({ table: 'estacionamentos', column: 'id' })
    ])
  })


  public messages: CustomMessages = {}
}
