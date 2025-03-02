import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../infra/repositories/IUserRepository";

@injectable()
class FindListUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(
    name: string,
    page: number,
    limit: number
  ): Promise<unknown | null> {
    if (!page || page <= 0) {
      page = 1;
    }
    if (!limit || limit > 30) {
      limit = 30;
    }

    let usuarios: unknown;
    
    if (name) {
      usuarios = await this.userRepository.findByNome(name, page, limit);
    } else {
      usuarios = await this.userRepository.findAll(page, limit);
    }

    return usuarios;
  }
}

export { FindListUsersUseCase };
