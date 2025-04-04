import { container } from "tsyringe";

import { IUserRepository } from "../../modules/usuarios/infra/repositories/IUserRepository";
import { UserRepository } from "../../modules/usuarios/infra/repositories/UserRepository";
import { ICategoriaRepository } from "../../modules/categorias/infra/repositories/ICategoriaRepository";
import { CategoriaRepository } from "../../modules/categorias/infra/repositories/CategoriaRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ICategoriaRepository>(
  "CategoriaRepository",
  CategoriaRepository
);
