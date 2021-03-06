'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('nome', 80).notNullable()
      table.string('rua', 254).notNullable()
      table.string('email', 60).notNullable().unique()
      table.string('password', 254).notNullable()
      table.string('phone', 60).notNullable().unique()
      table.string('cidade', 60).notNullable()
      table.decimal('avaliacoes', 4, 2)
      table.string('CEP', 60).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('users')

  }
}

module.exports = UserSchema
