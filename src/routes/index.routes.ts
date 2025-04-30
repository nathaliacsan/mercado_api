import { Router } from "express";
import { userRoute } from "../modules/usuarios/routes/User.routes";
import { categoriaRoute } from "../modules/categorias/routes/Categoria.routes";
import { produtoRoute } from "../modules/produtos/routes/Produto.routes";

const router = Router();

router.use("/user", userRoute);
router.use("/categoria", categoriaRoute);
router.use("/produto", produtoRoute);

export {router}

