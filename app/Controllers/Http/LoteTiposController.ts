// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import LoteTipo from "App/Models/LoteTipo"
import LoteTipoValidator from "App/Validators/LoteTipoValidator"

export default class LoteTiposController {
    index(){

        return LoteTipo.all()

    }

    async store({request}){

        const dados = await request.validate(LoteTipoValidator)

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
        const dados = await request.only(LoteTipoValidator)
        const loteTipo = await LoteTipo.findOrFail(id)

        loteTipo.merge(dados)
        return loteTipo.save()

    }
}
