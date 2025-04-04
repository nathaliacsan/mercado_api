import { ICategoriaDTO } from "../entities/ICategoriaDTO";

interface ICategoriaRepository {
  cadCategoria(nome: string): Promise<void>;
  findAllCategoria(): Promise<ICategoriaDTO[]>;
  updateCategoria(id: string, nome: string): Promise<void>;
  deleteCategoria(id: string): Promise<void>;
}

export { ICategoriaRepository };
