// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario"

export default class FuncionariosController {
    index(){

        return Funcionario.all()

    }

    store({request}){

        const dados = request.only(['idPessoa', 'matricula', 'salario'])

        return Funcionario.create(dados)
        
    }

    show({request}){

        const id = request.param('id')

        return Funcionario.findOrFail(id)

    }

    async destroy({request}){

        const id = request.param('id')
        const funcionario = await Funcionario.findOrFail(id)

        return funcionario.delete()

    }

    async update({request}){

        const id = request.param('id')
        const dados = request.only(['idPessoa', 'matricula', 'salario'])
        const funcionario = await Funcionario.findOrFail(id)

        funcionario.merge(dados)
        return funcionario.save()

    }
}
