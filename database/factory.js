'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

 Factory.blueprint('App/Models/Post', (faker) => {
   return {
     titulo: faker.sentence({ words: 3 }),
     descripcion: faker.paragraph(),
     autor: faker.username(),
     edad: faker.age()
   }
 })
