import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const { MONGODB_URL, PORT } = process.env;

if (!MONGODB_URL) {
  throw new Error(
    "Defina uma variável de ambiente com nome MONGODB_URL no arquivo .env.local"
  );
}

if (!PORT) {
  throw new Error(
    "Defina uma variável de ambiente com nome PORT no arquivo .env.local"
  );
}

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
