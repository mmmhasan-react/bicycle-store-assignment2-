import express from "express";
import { orderControllers } from "./order.controller";
const router = express.Router();

router.post("/orders/", orderControllers.createOrderIntoDb);

export const orderRouter = router;
