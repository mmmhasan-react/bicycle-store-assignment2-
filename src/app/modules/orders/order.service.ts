import { Orders } from "./order.interface";
import { ordersModel } from "./order.schema";

//create orders
const createOrder = async (orderData: Orders) => {
  const result = await ordersModel.create(orderData);
  return result;
};

//calculated revinue
// const calculateRevenue = async (orderData: Orders) => {
//   const result = await ordersModel.find(orderData);
//   return result;
// };

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
