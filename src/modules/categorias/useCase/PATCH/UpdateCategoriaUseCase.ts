import { inject, injectable } from "tsyringe";
import { ICategoriaRepository } from "../../infra/repositories/ICategoriaRepository";

@injectable()
class UpdateCategoriaUseCase {
  constructor(
    @inject("CategoriaRepository")
    private categoriaRepository: ICategoriaRepository
  ) {}

  async execute(id: string, nome: string): Promise<void> {
    await this.categoriaRepository.updateCategoria(id, nome);
  }
}

export { UpdateCategoriaUseCase };
