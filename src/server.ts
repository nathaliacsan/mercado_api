import "reflect-metadata";
import express, { json } from "express";
import "./shared/container";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

import { router } from "./routes/index.routes";

const app = express();
const port = 3300;

app.use(
  cors({
    origin: "http://localhost:3000", // ou a porta que seu front roda
  })
);
app.use(json());
app.use(router);

app.listen(port, () => {
  console.log(`🎈🎈Example app listening at ${port}🎈🎈`);
});
