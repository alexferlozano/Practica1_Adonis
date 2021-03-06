'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('show', 'PostController.store')
  Route.post('create', 'PostController.create').middleware(['edad'])
  Route.put('edit/:id', 'PostController.edit').middleware(['edad'])
  Route.delete('delete/:id', 'PostController.delete')
}).prefix('api/posts/')
