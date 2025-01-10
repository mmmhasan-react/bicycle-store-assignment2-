import { Bicycle } from "./bicycle.interface";
import { bicycleModel } from "./bicycle.schema";

//1. Create a Bicycle
const createBicycleIntoDb = (bicycle: Bicycle) => {
  const result = bicycleModel.create(bicycle);
  return result;
};

//2.Get All Bicycles
const getAllBicyclesFromDb = () => {
  const result = bicycleModel.find({});
  return result;
};

// 3. Get a Specific Bicycle
const getASpecificBicycle = (id: any) => {
  const result = bicycleModel.findById(id);
  return result;
};

//4. Update a Bicycle
const updateABicycle = (id: any, bicycledata: Bicycle) => {
  const result = bicycleModel.findOneAndUpdate(id, bicycledata, {
    new: true,
  });
  return result;
};

export const bicycleServices = {
  createBicycleIntoDb,
  getAllBicyclesFromDb,
  getASpecificBicycle,
  updateABicycle,
};
