// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario"
import FuncionarioValidator from "App/Validators/FuncionarioValidator"

export default class FuncionariosController {
    index() {
        return Funcionario.query().preload('lojas').preload('pessoa')
    }

    async store({ request }) {

        const dados = await request.validate(FuncionarioValidator)

        return Funcionario.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Funcionario.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const funcionario = await Funcionario.findOrFail(id)

        return funcionario.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validate(FuncionarioValidator)
        const funcionario = await Funcionario.findOrFail(id)

        funcionario.merge(dados)
        return funcionario.save()

    }
}
