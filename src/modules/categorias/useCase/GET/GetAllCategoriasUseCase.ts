import { inject, injectable } from "tsyringe";
import { ICategoriaRepository } from "../../infra/repositories/ICategoriaRepository";
import {
  ICadCategoriaDTO,
  ICategoriaDTO,
} from "../../infra/entities/ICategoriaDTO";

@injectable()
class GetAllCategoriasUseCase {
  constructor(
    @inject("CategoriaRepository")
    private categoriaRepository: ICategoriaRepository
  ) {}

  async execute(): Promise<ICategoriaDTO[]> {
    return await this.categoriaRepository.findAllCategoria();
  }
}

export { GetAllCategoriasUseCase };
