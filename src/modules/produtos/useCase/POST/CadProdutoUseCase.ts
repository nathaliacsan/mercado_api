import { inject, injectable } from "tsyringe";
import { IProdutoRepository } from "../../infra/repositories/IProdutoRepository";

@injectable() 
class CadProdutoUseCase {
  constructor(
    @inject("ProdutoRepository")
    private produtoRepository: IProdutoRepository
  ) {}

  async execute(nome: string, valor: number): Promise<void> {
    await this.produtoRepository.cadProduto(nome, valor);
  }
}

export { CadProdutoUseCase };
