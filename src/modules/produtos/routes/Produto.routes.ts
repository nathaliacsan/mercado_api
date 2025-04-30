import { Router } from "express";
import { ProdutoController } from "../controller/ProdutoController";

const produtoRoute = Router();
const produtoController = new ProdutoController();

produtoRoute.post("/", produtoController.register);
produtoRoute.get("/", produtoController.getAll);
produtoRoute.patch("/:id", produtoController.updateProduto);
produtoRoute.delete("/:id",produtoController.DeleteProduto)
export { produtoRoute };
