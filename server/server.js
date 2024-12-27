"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id_generator_js_1 = require("./base/id_generator.js");
var install_js_1 = require("./todos/install.js");
var install_js_2 = require("./users/install.js");
var app = require('./server-config.js');
var idGenerator = new id_generator_js_1.IdGenerator();
(0, install_js_1.installTodos)({ app: app, idGenerator: idGenerator });
(0, install_js_2.installUsers)({ app: app, idGenerator: idGenerator });
var port = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, function () { return console.log("Listening on port ".concat(port)); });
}
module.exports = app;
