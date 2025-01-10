import express from "express";
import { orderControllers } from "./order.controller";
const router = express.Router();

router.post("/orders/", orderControllers.createOrderIntoDb);
router.get("/orders/revenue/", orderControllers.revenueOfAllOrders);

export const orderRouter = router;
