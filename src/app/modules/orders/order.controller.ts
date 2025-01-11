import { Request, Response } from "express";
import { orderServices } from "./order.service";

//create orders
const createOrderIntoDb = async (req: Request, res: Response) => {
  const body = req.body;
  const result = await orderServices.createOrder(body);

  res.status(200).json({
    message: "Order created successfully",
    status: true,
    data: result,
  });
};

//calculatedRevinue
const revenueOfAllOrders = async (req: Request, res: Response) => {
  const body = req.body;
  const result = await orderServices.calculateRevenue(body);
  console.log(result);

  res.status(200).json({
    message: "Revenue calculated successfully",
    status: true,
    data: result,
  });
};
export const orderControllers = {
  createOrderIntoDb,
  revenueOfAllOrders,
};
