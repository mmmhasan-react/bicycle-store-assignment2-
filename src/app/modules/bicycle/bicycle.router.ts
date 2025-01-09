import express, { request, response } from "express";
import app from "../../../app";
import { bicycleControllers } from "./bicycle.contoller";

const router = express.Router();

router.post("/products", bicycleControllers.createBicycle);
router.get("/products", bicycleControllers.getBicyclesFromDb);
router.get(
  "/products/:productId",
  bicycleControllers.getASpecificBicycleFromDb
);

export const bicyclerouter = router;
