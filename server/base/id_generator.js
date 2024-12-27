"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdGenerator = exports.Model = void 0;
var Model;
(function (Model) {
    Model[Model["USER"] = 1] = "USER";
    Model[Model["TODO"] = 2] = "TODO";
})(Model || (exports.Model = Model = {}));
var prefixes = (_a = {},
    _a[Model.USER] = 'U',
    _a[Model.TODO] = 'T',
    _a);
var IdGenerator = /** @class */ (function () {
    function IdGenerator() {
    }
    IdGenerator.prototype.generateId = function (model) {
        return prefixes[model] + Date.now().toString(36) + (Math.round(Math.random() * 100)).toString(36).padStart(2, '0');
    };
    return IdGenerator;
}());
exports.IdGenerator = IdGenerator;
