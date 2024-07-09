"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//creation of database connection
const sequelize = new sequelize_1.Sequelize('app-anm', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
});
exports.default = sequelize;
