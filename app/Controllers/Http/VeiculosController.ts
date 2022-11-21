// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Veiculo from "App/Models/Veiculo"
import VeiculoValidator from "App/Validators/VeiculoValidator"

export default class VeiculosController {
    async index({ request }) {
        const id = request.param('id')
        const {
            placa,
            marca,
            modelo,
            idPessoa
        } = await request.validate(VeiculoValidator)

        const veiculos = Veiculo.query().preload('pessoa').select(
            'id',
            'placa',
            'marca',
            'modelo',
            'idPessoa'
        )

        if (id) {
            veiculos.where('id', id)
        }

        if (placa) {
            veiculos.where('placa', placa)
        }

        if (marca) {
            veiculos.where('marca', marca)
        }

        if (modelo) {
            veiculos.where('modelo', modelo)
        }

        if (idPessoa) {
            veiculos.where('idPessoa', idPessoa)
        }

        return veiculos

    }

    store({ request }) {

        const dados = request.only(['placa', 'marca', 'modelo', 'idPessoa'])

        return Veiculo.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Veiculo.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const veiculo = await Veiculo.findOrFail(id)

        return veiculo.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = request.only(['placa', 'marca', 'modelo', 'idPessoa'])
        const veiculo = await Veiculo.findOrFail(id)

        veiculo.merge(dados)
        return veiculo.save()

    }
}
