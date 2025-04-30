import { inject, injectable } from "tsyringe";
import { IProdutoRepository } from "../../infra/repositories/IProdutoRepository";

@injectable()
class DeleteProdutoUseCase {
  constructor(
    @inject("ProdutoRepository")
    private produtoRepository: IProdutoRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.produtoRepository.deleteProduto(id);
  }
}

export { DeleteProdutoUseCase };
