import express, { Request, Response } from "express";
import cors from "cors";
import { bicycleServices } from "./app/modules/bicycle/bicycle.service";
import { bicycleControllers } from "./app/modules/bicycle/bicycle.contoller";
import { bicyclerouter } from "./app/modules/bicycle/bicycle.router";

const app = express();

app.use(express.json());
app.use(cors());

//api
app.use("/api/bicycles", bicyclerouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
