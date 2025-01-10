import { Request, Response } from "express";
import { bicycleModel } from "./bicycle.schema";
import { bicycleServices } from "./bicycle.service";
import mongoose, { isValidObjectId, ObjectId } from "mongoose";

//1. Create a Bicycle
const createBicycle = async (req: Request, res: Response) => {
  const bicycleData = req.body.bicycles;
  console.log("i am bicycles", bicycleData);
  const result = await bicycleServices.createBicycleIntoDb(bicycleData);

  res.status(200).json({
    message: "Bicycle created successfully",
    success: true,
    data: result,
  });
};

//2. Get All Bicycles
const getBicyclesFromDb = async (req: Request, res: Response) => {
  const result = await bicycleServices.getAllBicyclesFromDb();

  res.status(200).json({
    message: "Bicycles retrieved successfully",
    status: true,
    data: result,
  });
};

// 3. Get a Specific Bicycle from db
const getASpecificBicycleFromDb = async (req: Request, res: Response) => {
  const id = req.params.productId;
  console.log(id);

  const result = await bicycleServices.getASpecificBicycle({
    _id: new mongoose.Types.ObjectId(id),
  });

  res.status(200).json({
    message: "Bicycles retrieved successfully",
    status: true,
    data: result,
  });
};

// 4. Update a Bicycle into db
const updateABicycleintoDB = async (req: Request, res: Response) => {
  const id = req.params.productId;
  const body = req.body;

  const result = await bicycleServices.updateABicycle(
    { _id: new mongoose.Types.ObjectId(id) },
    body
  );

  res.status(200).json({
    message: "Bicycles data updated successfully",
    status: true,
    data: result,
  });
};

//5. Delete a Bicycle
const deleteABicyclefromDb = async (req: Request, res: Response) => {
  const id = req.params.productId;
  const body = req.body;

  const result = await bicycleServices.deleteABicycle({
    _id: new mongoose.Types.ObjectId(id),
  });

  res.status(200).json({
    message: "Bicycle deleted successfully",
    status: true,
    data: {},
  });
};

export const bicycleControllers = {
  createBicycle,
  getBicyclesFromDb,
  getASpecificBicycleFromDb,
  updateABicycleintoDB,
  deleteABicyclefromDb,
};
