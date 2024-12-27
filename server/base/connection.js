"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_LIMIT = void 0;
exports.createDbConnection = createDbConnection;
// Abstraction layer to handle knex configuration per enviornment.
var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
exports.DEFAULT_LIMIT = 100;
function createDbConnection() {
    return require('knex')(config);
}
