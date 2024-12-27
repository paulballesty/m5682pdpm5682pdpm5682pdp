/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('todos', function(table) {
        table.string('content');
        table.dateTime('created_at');
        table.dateTime('last_modified_at');
        table.string('assigned_to');
        table.string('created_by');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
};
