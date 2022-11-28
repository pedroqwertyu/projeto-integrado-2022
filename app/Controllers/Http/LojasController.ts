// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Loja from "App/Models/Loja"
import LojaValidator from "App/Validators/LojaValidator"

export default class LojasController {
    index() {
        return Loja.query().preload('lote').preload('funcionarios')
    }

    async store({ request }) {

        const dados = await request.validate(LojaValidator)

        return Loja.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Loja.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const loja = await Loja.findOrFail(id)

        return loja.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validate(LojaValidator)
        const loja = await Loja.findOrFail(id)

        loja.merge(dados)
        return loja.save()

    }
}
