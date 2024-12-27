// Abstraction layer to handle knex configuration per enviornment.
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

export const DEFAULT_LIMIT = 100;

export function createDbConnection() {
    return require('knex')(config)
}
