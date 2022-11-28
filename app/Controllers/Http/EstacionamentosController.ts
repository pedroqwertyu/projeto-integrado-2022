// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Estacionamento from "App/Models/Estacionamento"
import EstacionamentoValidator from "App/Validators/EstacionamentoValidator"

export default class EstacionamentosController {
    index(){
        return Estacionamento.query().preload('preco').preload('veiculo')
    }

    async store({ request }) {

        const dados = await request.validate(EstacionamentoValidator)

        return Estacionamento.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Estacionamento.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const estacionamento = await Estacionamento.findOrFail(id)

        return estacionamento.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validate(EstacionamentoValidator)
        const estacionamento = await Estacionamento.findOrFail(id)

        estacionamento.merge(dados)
        return estacionamento.save()

    }
}
