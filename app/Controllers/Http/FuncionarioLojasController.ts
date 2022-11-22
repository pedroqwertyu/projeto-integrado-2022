// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FuncionarioLoja from "App/Models/FuncionarioLoja"
import FuncionarioLojaValidator from "App/Validators/FuncionarioLojaValidator"

export default class FuncionarioLojasController {
    // async index({request}){

    //     const id = request.param('id')
    //     const {
    //         idFuncionario,
    //         idLoja
    //     } = await request.all()

    //     const funcionarioLojas = FuncionarioLoja.query().preload('funcionario').preload('loja').select(
    //         'id',
    //         'idFuncionario',
    //         'idLoja'
    //     )

    //     if (id) {
    //         funcionarioLojas.where('id', id)
    //     }

    //     if (idFuncionario) {
    //         funcionarioLojas.where('idFuncionario', idFuncionario)
    //     }

    //     if (idLoja) {
    //         funcionarioLojas.where('idLoja', idLoja)
    //     }

    //     return funcionarioLojas
    // }
    index(){
        return FuncionarioLoja.query()
    }
    
    store({request}){

        const dados = request.validate(FuncionarioLojaValidator)

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
