// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pessoa from "App/Models/Pessoa";

export default class PessoasController {

    index() {
        return Pessoa.all()
    }

    store({ request }) {
        const dados = request.only(['descricao', 'unidade', 'valor'])
        return Pessoa.create(dados)
    }

    show({ request }) {
        const id = request.param('id')
        return Pessoa.findOrFail(id)
    }

    async destroy({ request }) {
        const id = request.param('id')
        const pessoa = await Pessoa.findOrFail(id)
        return pessoa.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const pessoa = await Pessoa.findOrFail(id)

        const dados = request.only(['descricao', 'unidade', 'valor'])

        pessoa.merge(dados)
        return pessoa.save()
    }

}
