import { Router } from "express";
import { createNota, deleteNotas, getNotas } from "../controladores/nota";

const router = Router();

router.get('/',getNotas);

router.post('/',createNota);

router.delete('/',deleteNotas);

export default router;