import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PessoaValidator {
  constructor(protected ctx: HttpContextContract) { }


  public schema = schema.create({
    nome: schema.string([
      rules.unique({ table: 'pessoas', column: 'nome' }),
      rules.maxLength(50)
    ]),
    cpf: schema.number([
      rules.unique({ table: 'pessoas', column: 'cpf' }),
      rules.minLength(11),
      rules.maxLength(11),
      rules.regex(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/)
    ]),
    email: schema.string.optional([
      rules.unique({ table: 'pessoas', column: 'email' }),
      rules.email()
    ]),
    telefone: schema.string.optional([
      rules.unique({ table: 'pessoas', column: 'telefone' }),
      rules.minLength(14),
      rules.maxLength(14)
    ]),
    endereco: schema.string.optional([
      rules.maxLength(50),
      rules.alphaNum()
    ]),
    tipo: schema.enum.optional([
      'PF', 'PJ'
    ])
  })


  public messages: CustomMessages = {}
}
