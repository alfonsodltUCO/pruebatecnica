"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const path_1 = __importDefault(require("path"));
// Configuración del directorio y nombre del archivo de logs
const logFilePath = path_1.default.join(__dirname, '..', 'logs', 'app.log');
// Configuración de los transportes para Winston (archivo y consola)
const logger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: logFilePath })
    ],
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Formato de fecha y hora
    winston_1.default.format.json() // Formato JSON para los logs
    )
});
exports.default = logger;
