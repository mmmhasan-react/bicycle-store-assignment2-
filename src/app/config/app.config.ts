import dotenv from "dotenv";
import path from "path";
import { cwd } from "process";
dotenv.config({ path: path.join(cwd(), ".env") });

export const config = {
  db_url: process.env.DB_URL,
  port: process.env.PORT,
};
