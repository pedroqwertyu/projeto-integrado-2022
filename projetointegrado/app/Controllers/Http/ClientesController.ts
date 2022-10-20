// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"

export default class ClientesController {
    index(){

        return Cliente.all()

    }

    store({request}){

        const dados = request.only(['idPessoa', 'desconto'])

        return Cliente.create(dados)
        
    }

    show({request}){

        const id = request.param('id')

        return Cliente.findOrFail(id)

    }

    async destroy({request}){

        const id = request.param('id')
        const cliente = await Cliente.findOrFail(id)

        return cliente.delete()

    }

    async update({request}){

        const id = request.param('id')
        const dados = request.only(['idPessoa', 'desconto'])
        const cliente = await Cliente.findOrFail(id)

        cliente.merge(dados)
        return cliente.save()

    }
}
