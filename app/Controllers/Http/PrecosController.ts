// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Preco from "App/Models/Preco"

export default class PrecosController {
    
    index() {
        return Preco.all()
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
