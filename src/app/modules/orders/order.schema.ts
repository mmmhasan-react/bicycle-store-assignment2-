import { Model, model, Schema } from "mongoose";
import { Orders } from "./order.interface";

const ordersSchema = new Schema<Orders>(
  {
    email: {
      type: String,
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      // ref: "bicycleModel",
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ordersModel = model<Orders>("order", ordersSchema);
