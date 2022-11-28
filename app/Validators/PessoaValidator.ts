import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PessoaValidator {
  constructor(protected ctx: HttpContextContract) { }


  public schema = schema.create({
    nome: schema.string([
      rules.unique({ table: 'pessoas', column: 'nome' }),
      rules.alpha({
        allow: ['space']
      }),
      rules.maxLength(50)
    ]),
    cpf: schema.string([
      rules.unique({ table: 'pessoas', column: 'cpf' }),
      rules.minLength(11),
      rules.maxLength(11),
      rules.regex(/([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/)
    ]),
    email: schema.string.optional([
      rules.unique({ table: 'pessoas', column: 'email' }),
      rules.email()
    ]),
    telefone: schema.number.optional([
      rules.unique({ table: 'pessoas', column: 'telefone' }),
    ]),
    endereco: schema.string.optional([
      rules.maxLength(50),
      rules.alphaNum({
        allow: ['space']
      })
    ]),
    tipo: schema.enum([
      'PF', 'PJ'
    ])
  })


  public messages: CustomMessages = {}
}
