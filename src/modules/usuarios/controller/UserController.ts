import { Request, Response } from "express";
import { container } from "tsyringe";
import { CadUserUseCase } from "../useCases/cadUser/CadUserUseCase";
import { FindListUsersUseCase } from "../useCases/findUser/FindListUsersUseCase";
import { UserLoginUseCase } from "../useCases/loginUser/UserLoginUseCase";
import { UpdateUserUseCase } from "../useCases/updateUser/UpdateUserUseCase";
import { FindUniqueUsersUseCase } from "../useCases/findUser/FindUniqueUsersUseCase";

class UserController {
  async register(req: Request, res: Response): Promise<Response> {
    const { nome, cpf, email, senha, confirmarSenha, dt_nascimento } = req.body;

    const cadUserUseCase = container.resolve(CadUserUseCase);

    try {
      await cadUserUseCase.execute(
        nome,
        cpf,
        email,
        senha,
        confirmarSenha,
        dt_nascimento
      );
      return res.status(201).json({
        message: "Usuario cadastrado!",
      });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { nome, cpf, email, dt_nascimento } = req.body;
    const id = res.locals.id;

    const updateUsuario = container.resolve(UpdateUserUseCase);

    try {
      await updateUsuario.execute({ id, nome, cpf, email, dt_nascimento });
      return res.status(201).json({
        message: "Usuario atualizado",
      });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async getList(req: Request, res: Response): Promise<Response> {
    const name = req.query.name as string;
    const page: number = parseInt(req.query.page as string);
    const limit: number = parseInt(req.query.limit as string);

    const findAllUsers = container.resolve(FindListUsersUseCase);
    const users = await findAllUsers.execute(name, page, limit);

    try {
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }

  async getUnique(req: Request, res: Response): Promise<Response> {
    const { id, cpf, email } = req.params;

    const findById = container.resolve(FindUniqueUsersUseCase);
    const user = await findById.execute(id, cpf, email);

    try {
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { email, senha } = req.body;

    const loginUserUseCase = container.resolve(UserLoginUseCase);

    try {
      const token = await loginUserUseCase.execute({ email, senha });
      return res.status(202).json({
        message: "login OK",
        token: token,
      });
    } catch (err) {
      console.log(err);
      return res.status(401).json({ message: err });
    }
  }
}

export { UserController };
