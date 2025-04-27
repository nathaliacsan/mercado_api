import { inject, injectable } from "tsyringe";
import { IProdutoRepository } from "../../infra/repositories/IProdutoRepository";
import {
  IProdutoDTO,
} from "../../infra/entities/IProdutoDTO";

@injectable()
class GetAllProdutosUseCase {
  constructor(
    @inject("ProdutoRepository")
    private produtoRepository: IProdutoRepository
  ) {}

  async execute(): Promise<IProdutoDTO[]> {
    return await this.produtoRepository.findAllProduto();
  }
}

export { GetAllProdutosUseCase };
