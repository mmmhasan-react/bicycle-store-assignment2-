import { Orders } from "./order.interface";
import { ordersModel } from "./order.schema";

const createOrder = async (orderData: Orders) => {
  const result = await ordersModel.create(orderData);
  return result;
};

export const orderServices = {
  createOrder,
};
