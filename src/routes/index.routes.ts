import { Router } from "express";


import { userRoute } from "../modules/usuarios/routes/User.routes";
import { categoriaRoute } from "../modules/categorias/routes/Categoria.routes";

const router = Router();

router.use("/user", userRoute);
router.use("/categoria", categoriaRoute);

import{userRoute} from "../modules/usuarios/routes/User.routes"

const router = Router();

router.use("/user", userRoute)

export {router}

