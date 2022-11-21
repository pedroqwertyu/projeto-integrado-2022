// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Preco from "App/Models/Preco"
import PrecoValidator from "App/Validators/PrecoValidator"

export default class PrecosController {

    async index({ request }) {
        const id = request.param('id')
        const {
            descricao,
            unidade,
            valor
        } = await request.validate(PrecoValidator)

        const precos = Preco.query().preload('estacionamentos').select(
            'id',
            'decricao',
            'unidade',
            'valor'
        )

        if (id) {
            precos.where('id', id)
        }
        if (descricao) {
            precos.where('descricao', descricao)
        }
        if (unidade) {
            precos.where('unidade', unidade)
        }
        if (valor) {
            precos.where('valor', valor)
        }
        return precos
    }

    store({ request }) {
        const dados = request.only(['nome', 'cpf', 'email', 'telefone', 'endereco', 'tipo'])
        return Preco.create(dados)
    }

    show({ request }) {
        const id = request.param('id')
        return Preco.findOrFail(id)
    }

    async destroy({ request }) {
        const id = request.param('id')
        const preco = await Preco.findOrFail(id)
        return preco.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const preco = await Preco.findOrFail(id)

        const dados = request.only(['nome', 'cpf', 'email', 'telefone', 'endereco', 'tipo'])

        preco.merge(dados)
        return preco.save()
    }
}
