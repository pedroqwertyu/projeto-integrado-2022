// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pessoa from "App/Models/Pessoa";
import PessoaValidator from "App/Validators/PessoaValidator";

export default class PessoasController {
    index(){
        return Pessoa.query().preload('clientes').preload('funcionarios').preload('veiculos')
    }

    async store({ request }) {
        const dados = await request.validate(PessoaValidator)
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

        const dados = await request.validate(PessoaValidator)

        pessoa.merge(dados)
        return pessoa.save()
    }

}
