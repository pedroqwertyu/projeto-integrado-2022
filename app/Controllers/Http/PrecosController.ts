// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Preco from "App/Models/Preco"
import PrecoValidator from "App/Validators/PrecoValidator"

export default class PrecosController {
    index(){
        return Preco.query().preload('estacionamentos')
    }

    async store({ request }) {
        const dados = await request.validate(PrecoValidator)
        return Preco.create(dados)
    }

    show({ request }) {
        const id = request.param('id')
        return Preco.findOrFail(id)
    }

    async destroy({ request }) {
        const id = request.param('id')
        const preco = await Preco.findOrFail(id)
        return preco.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const preco = await Preco.findOrFail(id)

        const dados = await request.validate(PrecoValidator)

        preco.merge(dados)
        return preco.save()
    }
}
