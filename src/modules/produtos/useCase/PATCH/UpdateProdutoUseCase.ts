import { inject, injectable } from "tsyringe";
import { IProdutoRepository } from "../../infra/repositories/IProdutoRepository";

@injectable()
class UpdateProdutoUseCase {
  constructor(
    @inject("ProdutoRepository")
    private produtoRepository: IProdutoRepository
  ) {}

  async execute(id: string, nome: string, valor: number): Promise<void> {
    await this.produtoRepository.updateProduto(id, nome, valor);
  }
}

export { UpdateProdutoUseCase };
