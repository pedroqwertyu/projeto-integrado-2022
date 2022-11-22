// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Loja from "App/Models/Loja"
import LojaValidator from "App/Validators/LojaValidator"

export default class LojasController {
    // async index({ request }) {

    //     const id = request.param('id')
    //     const {
    //         nome,
    //         descricao,
    //         cnpj,
    //         tamanho,
    //         idLote
    //     } = await request.validate(LojaValidator)

    //     const lojas = Loja.query().preload('lote').select(
    //         'id',
    //         'nome',
    //         'descricao',
    //         'cnpj',
    //         'tamanho',
    //         'idLote'
    //     )

    //     if (id) {
    //         lojas.where('id', id)
    //     }

    //     if (nome) {
    //         lojas.where('nome', nome)
    //     }

    //     if (descricao) {
    //         lojas.where('descricao', 'like', '%' + descricao + '%')
    //     }

    //     if (cnpj) {
    //         lojas.where('cpnj', 'like', cnpj + '%')
    //     }

    //     if (tamanho) {
    //         lojas.where('tamanho', 'like', '%' + tamanho + '%')
    //     }

    //     if (idLote) {
    //         lojas.where('idLote', 'like', '%' + idLote + '%')
    //     }

    //     return lojas

    // }
    index() {
        return Loja.query().preload('lote').select(
            'id',
            'nome',
            'descricao',
            'cnpj',
            'tamanho',
            'idLote'
        )
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
