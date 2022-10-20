// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FuncionarioLoja from "App/Models/FuncionarioLoja"

export default class FuncionarioLojasController {
    index(){

        return FuncionarioLoja.all()

    }

    store({request}){

        const dados = request.only(['idFuncionario', 'idLoja'])

        return FuncionarioLoja.create(dados)
        
    }

    show({request}){

        const id = request.param('id')

        return FuncionarioLoja.findOrFail(id)

    }

    async destroy({request}){

        const id = request.param('id')
        const funcionarioLoja = await FuncionarioLoja.findOrFail(id)

        return funcionarioLoja.delete()

    }

    async update({request}){

        const id = request.param('id')
        const dados = request.only(['idFuncionario', 'idLoja'])
        const funcionarioLoja = await FuncionarioLoja.findOrFail(id)

        funcionarioLoja.merge(dados)
        return funcionarioLoja.save()

    }
}
