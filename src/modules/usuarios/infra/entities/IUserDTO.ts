export interface IUserDTO {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  dt_nascimento: Date;
  created_at: Date;
  updated_at: Date | null;
  updatedSenha_at: Date | null;
}

interface IFindUsersDTO {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  dt_nascimento: Date;
  created_at: Date;
  updated_at: Date | null;
  updatedSenha_at: Date | null;
}

export interface ICadUserDTO {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  dt_nascimento: string;
  created_at: string ;
}

export interface IFindUserByEmailDTO extends IFindUsersDTO {

}

export interface IFindUserByNomeDTO  extends IFindUsersDTO  {

}

export interface IFindUserByCPFDTO  extends IFindUsersDTO {

}

export interface IFindAllUserDTO  extends IFindUsersDTO {

}

export interface IFindUserByIdDTO  extends IFindUsersDTO {
}

export interface ILoginDTO {
  id?: string;
  email: string;
  senha: string;
}

export interface IUpdateUserDTO {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  dt_nascimento: string;
  updated_at?: string;
}

export interface IEnvioDeEmailParaRedefinicaoDeSenhaDTO {
  email: string;
}

export interface IResetSenhaUserDTO {
  id?: string;
  senha: string;
  confirmaSenha: string;
  resetToken: string;
  updatedSenha_at?: string | null;
}
