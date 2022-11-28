// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Lote from "App/Models/Lote"
import LoteValidator from "App/Validators/LoteValidator"

export default class LotesController {
    index(){
        return Lote.query().preload('lojas').preload('loteTipo')
    }

    async store({request}){

        const dados = await request.validate(LoteValidator)

        return Lote.create(dados)
        
    }

    show({request}){

        const id = request.param('id')

        return Lote.findOrFail(id)

    }

    async destroy({request}){

        const id = request.param('id')
        const lote = await Lote.findOrFail(id)

        return lote.delete()

    }

    async update({request}){

        const id = request.param('id')
        const dados = await request.validate(LoteValidator)
        const lote = await Lote.findOrFail(id)

        lote.merge(dados)
        return lote.save()

    }
}
