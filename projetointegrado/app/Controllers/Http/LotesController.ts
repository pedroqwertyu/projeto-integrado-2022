// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Lote from "App/Models/Lote"

export default class LotesController {
    index(){

        return Lote.all()

    }

    store({request}){

        const dados = request.only(['area', 'valor', 'dataContrato', 'idLoteTipo'])

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
        const dados = request.only(['area', 'valor', 'dataContrato', 'idLoteTipo'])
        const lote = await Lote.findOrFail(id)

        lote.merge(dados)
        return lote.save()

    }
}
