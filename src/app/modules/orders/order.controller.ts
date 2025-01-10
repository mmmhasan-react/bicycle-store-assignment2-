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
  // const total_revenue = price;

  // res.status(200).json({
  //   message: "Revenue calculated successfully",
  //   status: true,
  //   data: result.total_revenue,
  // });
};
export const orderControllers = {
  createOrderIntoDb,
  revenueOfAllOrders,
};
