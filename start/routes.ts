/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.resource('/clientes', 'ClientesController').apiOnly()
  Route.resource('/estacionamentos', 'EstacionamentosController').apiOnly()
  Route.resource('/funcionarioLojas', 'FuncionarioLojasController').apiOnly()
  Route.resource('/funcionarios', 'FuncionariosController').apiOnly()
  Route.resource('/lojas', 'LojasController').apiOnly()
  Route.resource('/lotes', 'LotesController').apiOnly()
  Route.resource('/loteTipos', 'LoteTiposController').apiOnly()
  Route.resource('/pessoas', 'PessoasController').apiOnly()
  Route.resource('/precos', 'PrecosController').apiOnly()
  Route.resource('/veiculos', 'VeiculosController').apiOnly()
}).middleware('auth')

Route.post('/users', 'UsersController.store')
Route.post('/login', 'UsersController.login')