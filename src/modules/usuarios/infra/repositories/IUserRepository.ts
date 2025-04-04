import { IResetSenhaUserDTO, IFindUserByNomeDTO } from "../entities/IUserDTO";
import {
  ICadUserDTO,
  IFindAllUserDTO,
  IFindUserByCPFDTO,
  IFindUserByEmailDTO,
  IFindUserByIdDTO,
  ILoginDTO,
  IUpdateUserDTO,
} from "../entities/IUserDTO";

interface IUserRepository {
  register(user: ICadUserDTO): Promise<void>;
  update(user: IUpdateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<IFindUserByEmailDTO | null>;
  findByNome(nome: string, page: number, limit: number): Promise<IFindUserByNomeDTO[] | null>;
  findByCPF(cpf: string): Promise<IFindUserByCPFDTO | null>;
  findById(id: string): Promise<IFindUserByIdDTO | null>;
  findAll(page: number, limit: number): Promise<IFindAllUserDTO[] | null>;
  findForLogin(email: string): Promise<ILoginDTO | null>;
  resetSenha(user: IResetSenhaUserDTO): Promise<void>;
}

export { IUserRepository };
