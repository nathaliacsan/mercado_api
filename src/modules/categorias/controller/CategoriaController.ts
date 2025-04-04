import { container } from "tsyringe";
import { CadCategoriaUseCase } from "../useCase/POST/CadCategoriaUseCase";
import { Request, Response } from "express";
import { GetAllCategoriasUseCase } from "../useCase/GET/GetAllCategoriasUseCase";
import { UpdateCategoriaUseCase } from "../useCase/PATCH/UpdateCategoriaUseCase";
import { DeleteCategoriaUseCase } from "../useCase/DELETE/DeleteCategoriaUseCase";

class CategoriaController {
  async register(req: Request, res: Response): Promise<Response> {
    const { nome } = req.body;

    const cadCategoriaUseCase = container.resolve(CadCategoriaUseCase);

    try {
      await cadCategoriaUseCase.execute(nome);
      return res.status(201).json({
        message: "categoria cadastrado!",
      });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const getAllCategorias = container.resolve(GetAllCategoriasUseCase);

    try {
      const categorias = await getAllCategorias.execute();
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async updateCategoria(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const { nome } = req.body;
    const updateCategoriaUseCase = container.resolve(UpdateCategoriaUseCase);

    try {
      await updateCategoriaUseCase.execute(id, nome);
      return res.status(200).json({
        message: "categoria atualizada",
      });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async DeleteCategoria(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const deleteCategoriaUseCase = container.resolve(DeleteCategoriaUseCase);

    try {
      await deleteCategoriaUseCase.execute(id);
      return res.status(200).json({
        message: "categoria deletada",
      });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }
}

export { CategoriaController };
