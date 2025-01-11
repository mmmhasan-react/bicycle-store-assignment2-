import { Types } from "mongoose";

export type Orders = {
  email: string;
  product: Types.ObjectId;
  quantity: number;
  totalPrice: number;
};
