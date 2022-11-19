// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"
import ClienteValidator from "App/Validators/ClienteValidator"

export default class ClientesController {
    async index({ request }) {

        const id = request.param('id')
        const {
            idPessoa,
            desconto
        } = await request.validate(ClienteValidator)

        const clientes = Cliente.query().preload('pessoa').select(
            'id',
            'idPessoa',
            'desconto'
        )

        if (id) {
            clientes.where('id', id)
        }

        if (idPessoa) {
            clientes.where('idPessoa', idPessoa)
        }

        if (desconto) {
            clientes.where('desconto', 'like', '%' + desconto + '%')
        }

        return clientes

    }

    store({ request }) {

        const dados = request.only(['idPessoa', 'desconto'])

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
        const dados = request.only(['idPessoa', 'desconto'])
        const cliente = await Cliente.findOrFail(id)

        cliente.merge(dados)
        return cliente.save()

    }
}
