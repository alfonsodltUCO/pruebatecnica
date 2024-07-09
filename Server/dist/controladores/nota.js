"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotas = exports.createNota = exports.getNotas = void 0;
const nota_1 = __importDefault(require("../modelos/nota"));
const getNotas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let listNotas = yield nota_1.default.findAll();
    if (listNotas.length > 0) {
        listNotas = listNotas;
        res.status(200).json({
            listNotas,
        });
    }
    else {
        res.status(404).json({
            msg: "No encontrada ninguna nota"
        });
    }
});
exports.getNotas = getNotas;
const createNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { calificacion } = req.body;
    try {
        const nota = yield nota_1.default.create({ calificacion });
        res.json({
            msg: "Nota guardada correctamente",
            nota, // Devuelve la nota creada para confirmación
        });
    }
    catch (err) {
        console.error(err); // Log del error para depuración
        res.status(500).json({
            msg: "Error al guardar la nota",
        });
    }
});
exports.createNota = createNota;
const deleteNotas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const val = nota_1.default.destroy({
            where: {},
            truncate: true
        }).then(() => {
            res.status(200).json({
                msg: "Notas borradas correctamente",
            });
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Ocurrio un error durante el borrado"
        });
    }
});
exports.deleteNotas = deleteNotas;
