// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Veiculo from "App/Models/Veiculo"

export default class VeiculosController {
    index(){

        return Veiculo.all()

    }

    store({request}){

        const dados = request.only(['placa', 'marca', 'modelo', 'idPessoa'])

        return Veiculo.create(dados)
        
    }

    show({request}){

        const id = request.param('id')

        return Veiculo.findOrFail(id)

    }

    async destroy({request}){

        const id = request.param('id')
        const veiculo = await Veiculo.findOrFail(id)

        return veiculo.delete()

    }

    async update({request}){

        const id = request.param('id')
        const dados = request.only(['placa', 'marca', 'modelo', 'idPessoa'])
        const veiculo = await Veiculo.findOrFail(id)

        veiculo.merge(dados)
        return veiculo.save()

    }
}
