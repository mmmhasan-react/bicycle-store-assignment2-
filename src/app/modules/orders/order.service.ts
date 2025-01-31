import { Orders } from "./order.interface";
import { ordersModel } from "./order.schema";
import { bicycleModel } from "../bicycle/bicycle.schema";
// create orders
const createOrder = async (orderData: Orders) => {
  const bicycle = await bicycleModel.findById(orderData.product);

  if (bicycle === null) {
    throw new Error("Product not found");
  }
  if (bicycle.quantity < orderData.quantity) {
    throw new Error("Insufficient product stock");
  }

  bicycle.quantity -= orderData.quantity;
  if (bicycle.quantity === 0) {
    bicycle.inStock = false;
  }

  // await bicycle.save();
  try {
    await bicycle.save();
  } catch (error: any) {
    throw new Error("Failed to update bicycle stock: " + error.message);
  }

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
