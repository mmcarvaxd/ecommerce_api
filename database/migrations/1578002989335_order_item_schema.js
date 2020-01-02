'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderItemSchema extends Schema {
  up () {
    this.create('order_items', (table) => {
      table.increments()
      table.integer('order_id').unsigned()
      table.integer('product_id').unsigned()
      table.integer('quantity')
      table.decimal('subtotal', 12,2).unsigned()

      table.foreign('order_id').references('id').inTable('order').onDelete('cascade')
      table.foreign('product_id').references('id').inTable('product').onDelete('cascade')
    })
  }

  down () {
    this.drop('order_items')
  }
}

module.exports = OrderItemSchema
