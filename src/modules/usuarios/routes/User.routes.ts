import { Router } from "express";
import { UserController } from "../controller/UserController";
import { validateRequestBody,  } from "zod-express-middleware";
import {
  cadUserValidator,
  updateUserValidator,
} from "../../../shared/middlewares/zodValidation/User";
import { checkToken } from "../../../shared/middlewares/token/AuthMiddlewareUser";



const userRoute = Router();
const userController = new UserController();

userRoute.post("/login", userController.login);
userRoute.post("/", validateRequestBody(cadUserValidator),userController.register);
userRoute.patch("/", checkToken, validateRequestBody(updateUserValidator), userController.update);
userRoute.get("/search", checkToken, userController.getList);
userRoute.get("/:id?/:cpf?/:email?", checkToken, userController.getUnique)


export { userRoute };
