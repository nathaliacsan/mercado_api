import { IProdutoRepository } from "./IProdutoRepository";
import prismaClient from "../../../../db/prisma/prismaClient";
import { IProdutoDTO } from "../entities/IProdutoDTO";

class ProdutoRepository implements IProdutoRepository {
  async cadProduto(nome: string, valor: number): Promise<void> {
    await prismaClient.produto.create({
      data: {
        nome,
        valor,
        created_at: new Date(),
      },
    });
  }

  async findAllProduto(): Promise<IProdutoDTO[]> {
    return await prismaClient.produto.findMany({
      select: {
        id: true,
        nome: true,
        valor: true
      },
    });
  }

  async updateProduto(id: string, nome: string, valor: number): Promise<void> {
    await prismaClient.produto.update({
      where: {
        id,
      },
      data: {
        nome,
      },
    });
  }

  async deleteProduto(id: string): Promise<void> {
    await prismaClient.produto.delete({
      where: {
        id,
      },
    });
  }
}

export { ProdutoRepository };
