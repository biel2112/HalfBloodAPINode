import express from "express";
import BaseController from "../controllers/baseController.js";

const routes = express.Router();

routes.get("/bases",BaseController.listarBases)
routes.get("/bases/:id", BaseController.buscarBase)
routes.post("/bases", BaseController.cadastrarBase)
routes.put("/bases/:id", BaseController.atualizarBase)
routes.delete("/bases/:id", BaseController.excluirBase)

export default routes;