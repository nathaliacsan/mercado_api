import { inject, injectable } from "tsyringe";
import { ICategoriaRepository } from "../../infra/repositories/ICategoriaRepository";

@injectable()
class DeleteCategoriaUseCase {
  constructor(
    @inject("CategoriaRepository")
    private categoriaRepository: ICategoriaRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.categoriaRepository.deleteCategoria(id);
  }
}

export { DeleteCategoriaUseCase };
