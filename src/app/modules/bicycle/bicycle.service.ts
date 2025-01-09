import { Bicycle } from "./bicycle.interface";
import { bicycleModel } from "./bicycle.schema";

//create a bicycles
const createBicycleIntoDb = (bicycle: Bicycle) => {
  const result = bicycleModel.create(bicycle);
  return result;
};

//get all bicycles
const getAllBicyclesFromDb = () => {
  const result = bicycleModel.find({});
  return result;
};

// 3. Get a Specific Bicycle
const getASpecificBicycle = (id: any) => {
  const result = bicycleModel.findById(id);
  return result;
};

export const bicycleServices = {
  createBicycleIntoDb,
  getAllBicyclesFromDb,
  getASpecificBicycle,
};
