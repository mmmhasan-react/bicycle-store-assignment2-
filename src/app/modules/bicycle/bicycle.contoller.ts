import { Request, Response } from "express";
import { bicycleModel } from "./bicycle.schema";
import { bicycleServices } from "./bicycle.service";
import mongoose, { isValidObjectId, ObjectId } from "mongoose";

//create bicycles
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

//get all bicycles from db
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

export const bicycleControllers = {
  createBicycle,
  getBicyclesFromDb,
  getASpecificBicycleFromDb,
};
