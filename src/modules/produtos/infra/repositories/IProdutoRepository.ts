import { IProdutoDTO } from "../entities/IProdutoDTO";

interface IProdutoRepository {
  cadProduto(nome: string, valor: number): Promise<void>;
  findAllProduto(): Promise<IProdutoDTO[]>;
  updateProduto(id: string, nome: string, valor: number): Promise<void>;
  deleteProduto(id: string): Promise<void>;
}

export { IProdutoRepository };
