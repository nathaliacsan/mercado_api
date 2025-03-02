import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../infra/repositories/IUserRepository";
import AppError from "../../../../shared/errors/AppError";

@injectable()
class FindUniqueUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(
    email: string,
    cpf: string,
    id: string
  ): Promise<unknown | null> {
    console.log(email)
    console.log(cpf)
    console.log(id)
    if (email) {
      return await this.userRepository.findByEmail(email);
    } else if (cpf) {
      return await this.userRepository.findByCPF(cpf);
    } else if (id) {
      return await this.userRepository.findById(id);
    }
    return new AppError("sem parametro de email, cpf ou id", 400);
  }
}

export { FindUniqueUsersUseCase };
