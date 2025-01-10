import { Request, Response } from "express";
import { orderServices } from "./order.service";

const createOrderIntoDb = async (req: Request, res: Response) => {
  const body = req.body;
  const result = await orderServices.createOrder(body);

  res.status(200).json({
    message: "Order created successfully",
    status: true,
    data: result,
  });
};

export const orderControllers = {
  createOrderIntoDb,
};
