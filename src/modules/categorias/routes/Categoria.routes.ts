import { Router } from "express";
import { CategoriaController } from "../controller/CategoriaController";

const categoriaRoute = Router();
const categoriaController = new CategoriaController();

categoriaRoute.post("/", categoriaController.register);
categoriaRoute.get("/", categoriaController.getAll);
categoriaRoute.patch("/:id", categoriaController.updateCategoria);
categoriaRoute.delete("/:id",categoriaController.DeleteCategoria)
export { categoriaRoute };
