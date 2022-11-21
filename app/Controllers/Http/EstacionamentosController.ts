// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Estacionamento from "App/Models/Estacionamento"
import EstacionamentoValidator from "App/Validators/EstacionamentoValidator"

export default class EstacionamentosController {
    async index({ request }) {
        const id = request.param('id')
        const {
            idVeiculo,
            date_inicio,
            date_fim,
            idPreco
        } = await request.validate(EstacionamentoValidator)

        const estacionamentos = Estacionamento.query().preload('veiculo').select(
            'id',
            'idVeiculo',
            'date_inicio',
            'date_fim',
            'idPreco'
        )

        if (id) {
            estacionamentos.where('id', id)
        }

        if (idVeiculo) {
            estacionamentos.where('idVeiculo', idVeiculo)
        }

        if (date_inicio) {
            estacionamentos.where('date_inicio', date_inicio)
        }

        if (date_fim) {
            estacionamentos.where('date_fim', date_fim)
        }

        if (idPreco) {
            estacionamentos.where('idPreco', idPreco)
        }

        return estacionamentos

    }

    store({ request }) {

        const dados = request.only(['idVeiculo', 'dateInicio', 'dateFim', 'idPreco'])

        return Estacionamento.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Estacionamento.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const estacionamento = await Estacionamento.findOrFail(id)

        return estacionamento.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = request.only(['idVeiculo', 'dateInicio', 'dateFim', 'idPreco'])
        const estacionamento = await Estacionamento.findOrFail(id)

        estacionamento.merge(dados)
        return estacionamento.save()

    }
}
