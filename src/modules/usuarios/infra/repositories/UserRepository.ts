import prismaClient from "../../../../db/prisma/prismaClient";
import {
  ICadUserDTO,
  IFindAllUserDTO,
  IFindUserByCPFDTO,
  IFindUserByEmailDTO,
  IFindUserByIdDTO,
  ILoginDTO,
  IUpdateUserDTO,
  IResetSenhaUserDTO,
  IFindUserByNomeDTO,
} from "../entities/IUserDTO";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  async register({
    nome,
    cpf,
    email,
    senha,
    dt_nascimento,
    created_at,
  }: ICadUserDTO): Promise<void> {
    await prismaClient.user.create({
      data: {
        nome,
        cpf,
        email,
        senha,
        dt_nascimento,
        created_at,
      },
    });
  }

  async update({
    id,
    nome,
    cpf,
    email,
    dt_nascimento,
    updated_at,
  }: IUpdateUserDTO): Promise<void> {
    await prismaClient.user.update({
      where: { id },
      data: {
        nome,
        cpf,
        email,
        dt_nascimento,

        updated_at,
      },
    });
  }

  async findByEmail(email: string): Promise<IFindUserByEmailDTO | null> {
    return await prismaClient.user.findFirst({
      where: { email },
      select: {
        id: true,
        nome: true,
        cpf: true,
        email: true,
        dt_nascimento: true,
        created_at: true,
        updated_at: true,
        updatedSenha_at: true,
      },
      
    });
  }

  async findByCPF(cpf: string): Promise<IFindUserByCPFDTO | null> {
    return await prismaClient.user.findFirst({
      where: { cpf },
      select: {
        id: true,
        nome: true,
        cpf: true,
        email: true,
        dt_nascimento: true,
        created_at: true,
        updated_at: true,
        updatedSenha_at: true,
      },
    });
  }

  async findByNome(
    nome: string,
    page: number,
    limit: number
  ): Promise<IFindUserByNomeDTO[] | null> {
    return await prismaClient.user.findMany({
      where: {
        nome: {
          startsWith: nome,
        },
      },
      select: {
        id: true,
        nome: true,
        cpf: true,
        email: true,
        dt_nascimento: true,
        created_at: true,
        updated_at: true,
        updatedSenha_at: true,
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { nome: "asc" },
    });
  }

  async findById(id: string): Promise<IFindUserByIdDTO | null> {
    return await prismaClient.user.findFirst({
      where: { id },
      select: {
        id: true,
        nome: true,
        cpf: true,
        email: true,
        dt_nascimento: true,
        created_at: true,
        updated_at: true,
        updatedSenha_at: true,
      },
    });
  }

  async findAll(
    page: number,
    limit: number
  ): Promise<IFindAllUserDTO[] | null> {
    return await prismaClient.user.findMany({
      select: {
        id: true,
        nome: true,
        cpf: true,
        email: true,
        dt_nascimento: true,
        created_at: true,
        updated_at: true,
        updatedSenha_at: true,
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { nome: "asc" },
    });
  }

  async findForLogin(email: string): Promise<ILoginDTO | null> {
    return await prismaClient.user.findFirst({
      where: { email },
    });
  }

  async resetSenha({
    id,
    senha,
    updatedSenha_at,
  }: IResetSenhaUserDTO): Promise<void> {
    await prismaClient.user.update({
      where: { id },
      data: { senha, updatedSenha_at },
    });
  }
}

export { UserRepository };
