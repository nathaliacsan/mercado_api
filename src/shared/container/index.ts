import { container } from "tsyringe";

import { IUserRepository } from "../../modules/usuarios/infra/repositories/IUserRepository";
import { UserRepository } from "../../modules/usuarios/infra/repositories/UserRepository";
import { ICategoriaRepository } from "../../modules/categorias/infra/repositories/ICategoriaRepository";
import { CategoriaRepository } from "../../modules/categorias/infra/repositories/CategoriaRepository";
import { IProdutoRepository } from "../../modules/produtos/infra/repositories/IProdutoRepository";
import { ProdutoRepository } from "../../modules/produtos/infra/repositories/ProdutoRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ICategoriaRepository>(
  "CategoriaRepository",
  CategoriaRepository
);

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
  );

  container.registerSingleton<IProdutoRepository>( 
    "ProdutoRepository",
    ProdutoRepository
  );