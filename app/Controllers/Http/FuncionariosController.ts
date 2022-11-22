// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario"
import FuncionarioValidator from "App/Validators/FuncionarioValidator"

export default class FuncionariosController {
    // async index({request}){

    //     const id = request.param('id')
    //     const {
    //         idPessoa,
    //         matricula,
    //         salario
    //     } = await request.validate(FuncionarioValidator)

    //     const funcionarios = Funcionario.query().preload('pessoa').select(
    //         'id',
    //         'idPessoa',
    //         'matricula',
    //         'salario'
    //     )

    //     if (id) {
    //         funcionarios.where('id', id)
    //     }

    //     if (idPessoa) {
    //         funcionarios.where('idPessoa', idPessoa)
    //     }

    //     if (matricula) {
    //         funcionarios.where('matricula', 'like', matricula + '%')
    //     }

    //     if (salario) {
    //         funcionarios.where('salario', 'like', '%' + salario + '%')
    //     }

    //     return funcionarios

    // }
    index(){
        return Funcionario.query()
    }

    async store({request}){

        const dados = await request.validate(FuncionarioValidator)

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
        const dados = await request.validate(FuncionarioValidator)
        const funcionario = await Funcionario.findOrFail(id)

        funcionario.merge(dados)
        return funcionario.save()

    }
}
