import { ICategoriaRepository } from "./ICategoriaRepository";
import prismaClient from "../../../../db/prisma/prismaClient";
import { ICategoriaDTO } from "../entities/ICategoriaDTO";

class CategoriaRepository implements ICategoriaRepository {
  async cadCategoria(nome: string): Promise<void> {
    await prismaClient.categoria.create({
      data: {
        nome,
      },
    });
  }

  async findAllCategoria(): Promise<ICategoriaDTO[]> {
    return await prismaClient.categoria.findMany({
      select: {
        id: true,
        nome: true,
      },
    });
  }

  async updateCategoria(id: string, nome: string): Promise<void> {
    await prismaClient.categoria.update({
      where: {
        id,
      },
      data: {
        nome,
      },
    });
  }

  async deleteCategoria(id: string): Promise<void> {
    await prismaClient.categoria.delete({
      where: {
        id,
      },
    });
  }
}

export { CategoriaRepository };
