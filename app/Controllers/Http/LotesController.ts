// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Lote from "App/Models/Lote"
import LoteValidator from "App/Validators/LoteValidator"

export default class LotesController {
    // async index({ request }) {

    //     const id = request.param('id')
    //     const {
    //         area,
    //         valor,
    //         contrato,
    //         idLoteTipo,
    //     } = await request.validate(LoteValidator)

    //     const lotes = Lote.query().preload('loteTipo').select(
    //         'id',
    //         'area',
    //         'valor',
    //         'contrato',
    //         'idLoteTipo'
    //     )

    //     if (id) {
    //         lotes.where('id', id)
    //     }

    //     if (area) {
    //         lotes.where('area', 'like', '%' + area + '%')
    //     }

    //     if (valor) {
    //         lotes.where('valor', 'like', '%' + valor + '%')
    //     }

    //     if (contrato) {
    //         lotes.where('cpnj', 'like', '%' + contrato + '%')
    //     }

    //     if (idLoteTipo) {
    //         lotes.where('idLoteTipo', idLoteTipo)
    //     }

    //     return lotes

    // }
    index(){
        return Lote.query()
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
