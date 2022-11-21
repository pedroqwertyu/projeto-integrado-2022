// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pessoa from "App/Models/Pessoa";
import PessoaValidator from "App/Validators/PessoaValidator";

export default class PessoasController {

    async index({ request }) {
        const id = request.param('id')
        const {
            nome,
            cpf,
            email,
            telefone,
            endereco,
            tipo
        } = await request.validate(PessoaValidator)

        const pessoas = Pessoa.query().preload('cliente').select(
            'id',
            'nome',
            'cpf',
            'email',
            'telefone',
            'endereco',
            'tipo'
        )

        if (id) {
            pessoas.where('id', id)
        }

        if (nome) {
            pessoas.where('nome', nome)
        }
        if (cpf) {
            pessoas.where('cpf', cpf)
        }
        if (email) {
            pessoas.where('email', email)
        }

        if (telefone) {
            pessoas.where('telefone', telefone)
        }

        if (endereco) {
            pessoas.where('endereco', endereco)
        }

        if (tipo) {
            pessoas.where('tipo', tipo)
        }

        return pessoas
    }

    store({ request }) {
        const dados = request.only(['descricao', 'unidade', 'valor'])
        return Pessoa.create(dados)
    }

    show({ request }) {
        const id = request.param('id')
        return Pessoa.findOrFail(id)
    }

    async destroy({ request }) {
        const id = request.param('id')
        const pessoa = await Pessoa.findOrFail(id)
        return pessoa.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const pessoa = await Pessoa.findOrFail(id)

        const dados = request.only(['descricao', 'unidade', 'valor'])

        pessoa.merge(dados)
        return pessoa.save()
    }

}
