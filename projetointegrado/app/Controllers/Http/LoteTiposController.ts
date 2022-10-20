// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import LoteTipo from "App/Models/LoteTipo"

export default class LoteTiposController {
    index(){

        return LoteTipo.all()

    }

    store({request}){

        const dados = request.only(['aulaId', 'alunoId', 'presenca'])

        return LoteTipo.create(dados)
        
    }

    show({request}){

        const id = request.param('id')

        return LoteTipo.findOrFail(id)

    }

    async destroy({request}){

        const id = request.param('id')
        const loteTipo = await LoteTipo.findOrFail(id)

        return loteTipo.delete()

    }

    async update({request}){

        const id = request.param('id')
        const dados = request.only(['aulaId', 'alunoId', 'presenca'])
        const loteTipo = await LoteTipo.findOrFail(id)

        loteTipo.merge(dados)
        return loteTipo.save()

    }
}
