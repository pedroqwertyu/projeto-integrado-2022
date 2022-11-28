import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LojaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.alpha(),
      rules.maxLength(50)
    ]),
    descricao: schema.string.optional([
      rules.maxLength(100)
    ]),
    cnpj: schema.string([
      rules.regex(/[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/),
      rules.unique({table: 'lojas', column: 'cnpj'}),
      rules.minLength(14),
      rules.maxLength(14)
    ]),
    tamanho: schema.string([
      rules.alphaNum(),
      rules.maxLength(50)
    ]),
    loteId: schema.number([
      rules.exists({table: 'lojas', column: 'id'})
    ])
  })

  public messages: CustomMessages = {}
}
