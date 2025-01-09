import mongoose from "mongoose";

import { Schema, model, connect } from "mongoose";
import { Bicycle } from "./bicycle.interface";

const bicycleSchema = new Schema<Bicycle>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

export const bicycleModel = model<Bicycle>("bicycle", bicycleSchema);
