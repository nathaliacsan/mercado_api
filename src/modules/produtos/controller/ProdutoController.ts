import { container } from "tsyringe";
import { CadProdutoUseCase } from "../useCase/POST/CadProdutoUseCase";
import { Request, Response } from "express";
import { GetAllProdutosUseCase } from "../useCase/GET/GetAllProdutosUseCase";
import { UpdateProdutoUseCase } from "../useCase/PATCH/UpdateProdutoUseCase";
import { DeleteProdutoUseCase } from "../useCase/DELETE/DeleteProdutoUseCase";

class ProdutoController {
  async register(req: Request, res: Response): Promise<Response> {
    const { nome, valor } = req.body;

    const cadProdutoUseCase = container.resolve(CadProdutoUseCase);

    try {
      await cadProdutoUseCase.execute(nome, valor);
      return res.status(201).json({
        message: "produto cadastrado!",
      });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const getAllProdutos = container.resolve(GetAllProdutosUseCase);

    try {
      const produtos = await getAllProdutos.execute();
      return res.status(200).json(produtos);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async updateProduto(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const { nome, valor } = req.body;
    const updateProdutoUseCase = container.resolve(UpdateProdutoUseCase);

    try {
      await updateProdutoUseCase.execute(id, nome, valor);
      return res.status(200).json({
        message: "produto atualizado",
      });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async DeleteProduto(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const deleteProdutoUseCase = container.resolve(DeleteProdutoUseCase);

    try {
      await deleteProdutoUseCase.execute(id);
      return res.status(200).json({
        message: "produto deletado",
      });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }
}

export { ProdutoController };
