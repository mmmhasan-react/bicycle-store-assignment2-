import { Request, Response } from "express";
import { orderServices } from "./order.service";

//create orders
const createOrderIntoDb = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await orderServices.createOrder(body);
    console.log(body);
    res.status(200).json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "Validation failed.................order not created",
      success: false,
      error: err,
    });
  }
};

//calculatedRevinue
const revenueOfAllOrders = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await orderServices.calculateRevenue(body);
    console.log(result);

    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "Validation failed",
      success: false,
      error: err,
    });
  }
};
export const orderControllers = {
  createOrderIntoDb,
  revenueOfAllOrders,
};
