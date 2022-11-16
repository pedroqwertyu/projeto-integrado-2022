import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EstacionamentoValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    idVeiculo: schema.number([
      rules.exists({ table: 'veiculos', column: 'idVeiculo' })
    ]),
    dateInicio: schema.date.optional({
      format: 'dd-MM-yyyy'
    }),
    dateFim: schema.date.optional({
      format: 'dd-MM-yyyy'
    }),
    idPreco: schema.number([
      rules.exists({ table: 'precos', column: 'idPreco' })
    ])
  })


  public messages: CustomMessages = {}
}
