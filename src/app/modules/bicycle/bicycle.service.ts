import { Bicycle } from "./bicycle.interface";
import { bicycleModel } from "./bicycle.schema";

const createBicycleIntoDb = (bicycle: Bicycle) => {
  const result = bicycleModel.create(bicycle);
  return result;
};

export const bicycleServices = {
  createBicycleIntoDb,
};
