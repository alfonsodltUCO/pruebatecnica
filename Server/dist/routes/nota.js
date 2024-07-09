"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nota_1 = require("../controladores/nota");
const router = (0, express_1.Router)();
router.get('/', nota_1.getNotas);
router.post('/', nota_1.createNota);
router.delete('/', nota_1.deleteNotas);
exports.default = router;
