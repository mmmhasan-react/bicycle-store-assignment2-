import { Orders } from "./order.interface";
import { ordersModel } from "./order.schema";

//create orders
const createOrder = async (orderData: Orders) => {
  const result = await ordersModel.create(orderData);
  return result;
};

//calculated revinue
const calculateRevenue = async (orderData: Orders) => {
  const result = await ordersModel.find(orderData);
  return result;
};

export const orderServices = {
  createOrder,
  calculateRevenue,
};
