import { inject, injectable } from "tsyringe";
import { ICategoriaRepository } from "../../infra/repositories/ICategoriaRepository";

@injectable()
class CadCategoriaUseCase {
  constructor(
    @inject("CategoriaRepository")
    private categoriaRepository: ICategoriaRepository
  ) {}

  async execute(nome: string): Promise<void> {
    await this.categoriaRepository.cadCategoria(nome);
  }
}

export { CadCategoriaUseCase };
