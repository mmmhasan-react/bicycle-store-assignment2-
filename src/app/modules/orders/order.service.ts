import { Aggregate } from "mongoose";
import { Orders } from "./order.interface";
import { ordersModel } from "./order.schema";
import { PipelineStage } from "mongoose";
import { bicycleModel } from "../bicycle/bicycle.schema";
// create orders
const createOrder = async (orderData: Orders) => {
  const bicycle = await bicycleModel.findById(orderData.product);
  if (!bicycle) {
    throw new Error("Product not found");
  }
  if (bicycle.quantity < orderData.quantity) {
    throw new Error("Insufficient product stock");
  }

  bicycle.quantity -= orderData.quantity;
  if (bicycle.quantity === 0) {
    bicycle.inStock = false;
  }

  await bicycle.save();

  //create new bicycle
  const newOreder = new ordersModel(orderData);
  await newOreder.save();
};

// calculated revinue
const calculateRevenue = async (orderData: Orders) => {
  const result = await ordersModel.aggregate([
    {
      $group: {
        _id: null,
        totalSaleAmount: { $sum: { $multiply: ["$totalPrice", "$quantity"] } },
      },
    },
  ]);
  return result;
};

export const orderServices = {
  createOrder,
  calculateRevenue,
};
