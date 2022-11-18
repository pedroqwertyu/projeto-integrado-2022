// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Lote from "App/Models/Lote"
import LoteValidator from "App/Validators/LoteValidator"

export default class LotesController {
    async index({ request }) {

        const id = request.param('id')
        const {
            nome,
            descricao,
            cnpj,
            tamanho,
            idLote
        } = await request.validate(LoteValidator)

        const Lotes = Lote.query().preload('loteTipos').select(
            'id',
            'nome',
            'descricao',
            'cnpj',
            'tamanho',
            'idLote'
        )

        if (id) {
            Lotes.where('id', id)
        }

        if (nome) {
            Lotes.where('nome', nome)
        }

        if (descricao) {
            Lotes.where('descricao', 'like', '%' + descricao + '%')
        }

        if (cnpj) {
            Lotes.where('cpnj', 'like', cnpj + '%')
        }

        if (tamanho) {
            Lotes.where('tamanho', 'like', '%' + tamanho + '%')
        }

        if (idLote) {
            Lotes.where('idLote', 'like', '%' + idLote + '%')
        }

        return Lotes

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
