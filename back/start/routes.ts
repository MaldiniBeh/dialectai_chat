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
//import Ws from '../app/services/socket'

Route.get('/', async () => {
  // Ws.boot()
  // Ws.io.on('connection', (socket) => {
  //   socket.emit('news', { hello: 'world' })

  //   socket.on('my other event', (data) => {
  //     console.log(data)
  //   })
  // })
})
