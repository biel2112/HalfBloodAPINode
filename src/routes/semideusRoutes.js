import express from "express";
import SemideusController from "../controllers/semideusController.js";

const routes = express.Router();

routes.get("/semideuses",SemideusController.listarSemideuses)
routes.get("/semideuses/:id", SemideusController.buscarSemideus)
routes.post("/semideuses", SemideusController.cadastrarSemideus)
routes.put("/semideuses/:id", SemideusController.atualizarSemideus)
routes.delete("/semideuses/:id", SemideusController.excluirSemideus)

export default routes;