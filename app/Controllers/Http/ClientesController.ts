// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"
import ClienteValidator from "App/Validators/ClienteValidator"

export default class ClientesController {
    index() {
        return Cliente.query().preload('pessoa')
    }

    async store({ request }) {

        const dados = await request.validate(ClienteValidator)

        return Cliente.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Cliente.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const cliente = await Cliente.findOrFail(id)

        return cliente.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = request.validate(ClienteValidator)
        const cliente = await Cliente.findOrFail(id)

        cliente.merge(dados)
        return cliente.save()

    }
}
