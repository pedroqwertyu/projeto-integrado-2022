// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FuncionarioLoja from "App/Models/FuncionarioLoja"
import FuncionarioLojaValidator from "App/Validators/FuncionarioLojaValidator"

export default class FuncionarioLojasController {
    index(){
        return FuncionarioLoja.query().preload('funcionario').preload('loja')
    }
    
    async store({request}){

        const dados = await request.validate(FuncionarioLojaValidator)

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
        const dados = await request.validate(FuncionarioLojaValidator)
        const funcionarioLoja = await FuncionarioLoja.findOrFail(id)

        funcionarioLoja.merge(dados)
        return funcionarioLoja.save()

    }
}
