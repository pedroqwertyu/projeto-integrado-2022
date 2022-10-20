// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Loja from "App/Models/Loja"

export default class LojasController {
    index(){

        return Loja.all()

    }

    store({request}){

        const dados = request.only(['nome', 'descricao', 'cnpj', 'tamanho', 'idLote'])

        return Loja.create(dados)
        
    }

    show({request}){

        const id = request.param('id')

        return Loja.findOrFail(id)

    }

    async destroy({request}){

        const id = request.param('id')
        const loja = await Loja.findOrFail(id)

        return loja.delete()

    }

    async update({request}){

        const id = request.param('id')
        const dados = request.only(['nome', 'descricao', 'cnpj', 'tamanho', 'idLote'])
        const loja = await Loja.findOrFail(id)

        loja.merge(dados)
        return loja.save()

    }
}
