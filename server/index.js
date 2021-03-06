import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerDocs = require("./swagger.json");

import erroToCreated from "./middleware/erroToCreated.js";
import employeeRoute from "./routes/employee.js";
dotenv.config();

const { MONGODB_URL, PORT } = process.env;

if (!MONGODB_URL) {
  throw new Error(
    "Defina uma variável de ambiente com nome MONGODB_URL no arquivo .env"
  );
}

if (!PORT) {
  throw new Error(
    "Defina uma variável de ambiente com nome PORT no arquivo .env"
  );
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/employee", employeeRoute);
app.use(erroToCreated);

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))
  )
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

mongoose.set("useFindAndModify", false);
