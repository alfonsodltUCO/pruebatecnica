"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
const Nota = connectiondb_1.default.define('Nota', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    calificacion: {
        type: sequelize_1.DataTypes.DOUBLE, // Utilizamos DOUBLE para calificaciones decimales
        allowNull: false, // Asegúrate de que el campo no sea nulo
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'notas', // Especifica el nombre de la tabla
});
exports.default = Nota;
