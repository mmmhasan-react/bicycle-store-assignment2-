import express, { request, response } from "express";
import app from "../../../app";
import { bicycleControllers } from "./bicycle.contoller";

const router = express.Router();
//product created
router.post("/products", bicycleControllers.createBicycle);
// get all product
router.get("/products", bicycleControllers.getBicyclesFromDb);
//ger single product
router.get(
  "/products/:productId",
  bicycleControllers.getASpecificBicycleFromDb
);
// product updated
router.put("/products/:productId", bicycleControllers.updateABicycleintoDB);
// delete router
router.delete("/products/:productId", bicycleControllers.deleteABicyclefromDb);
export const bicyclerouter = router;
