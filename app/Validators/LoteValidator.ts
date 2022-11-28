import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    area: schema.string([
      rules.maxLength(50)
    ]),
    valor: schema.string([
      rules.maxLength(50)
    ]),
    contrato: schema.date.optional(),
    loteTipoId: schema.number([
      rules.exists({table: 'lote_tipos', column: 'id'})
    ])
  })

  public messages: CustomMessages = {}
}
