// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Veiculo from "App/Models/Veiculo"
import VeiculoValidator from "App/Validators/VeiculoValidator"

export default class VeiculosController {
    index(){
        return Veiculo.query().preload('pessoa').preload('estacionamentos')
    }

    async store({ request }) {

        const dados = await request.validate(VeiculoValidator)

        return Veiculo.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Veiculo.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const veiculo = await Veiculo.findOrFail(id)

        return veiculo.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validate(VeiculoValidator)
        const veiculo = await Veiculo.findOrFail(id)

        veiculo.merge(dados)
        return veiculo.save()

    }
}
