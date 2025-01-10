import { Model, model, Schema } from "mongoose";
import { Orders } from "./order.interface";

const ordersSchema = new Schema<Orders>({
  email: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

export const ordersModel = model<Orders>("order", ordersSchema);
