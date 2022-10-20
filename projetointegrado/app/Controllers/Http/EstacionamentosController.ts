// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Estacionamento from "App/Models/Estacionamento"

export default class EstacionamentosController {
    index(){

        return Estacionamento.all()

    }

    store({request}){

        const dados = request.only(['idVeiculo', 'dateInicio', 'dateFim', 'idPreco'])

        return Estacionamento.create(dados)
        
    }

    show({request}){

        const id = request.param('id')

        return Estacionamento.findOrFail(id)

    }

    async destroy({request}){

        const id = request.param('id')
        const estacionamento = await Estacionamento.findOrFail(id)

        return estacionamento.delete()

    }

    async update({request}){

        const id = request.param('id')
        const dados = request.only(['idVeiculo', 'dateInicio', 'dateFim', 'idPreco'])
        const estacionamento = await Estacionamento.findOrFail(id)

        estacionamento.merge(dados)
        return estacionamento.save()

    }
}
