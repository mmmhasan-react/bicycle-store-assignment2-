import { Request, Response } from "express";
import { bicycleModel } from "./bicycle.schema";
import { bicycleServices } from "./bicycle.service";
import mongoose, { isValidObjectId, ObjectId } from "mongoose";

//1. Create a Bicycle
const createBicycle = async (req: Request, res: Response) => {
  try {
    const bicycleData = req.body.bicycles;
    // console.log("i am bicycles", bicycleData);
    const result = await bicycleServices.createBicycleIntoDb(bicycleData);

    res.status(200).json({
      message: "Bicycle created successfully",
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "Validation failed",
      success: false,
      error: err,
    });
  }
};

//2. Get All Bicycles
const getBicyclesFromDb = async (req: Request, res: Response) => {
  try {
    const result = await bicycleServices.getAllBicyclesFromDb();

    res.status(200).json({
      message: "Bicycles retrieved successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "Validation failed",
      success: false,
      error: err,
    });
  }
};

// 3. Get a Specific Bicycle from db
const getASpecificBicycleFromDb = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    // console.log(id);

    const result = await bicycleServices.getASpecificBicycle({
      _id: new mongoose.Types.ObjectId(id),
    });

    res.status(200).json({
      message: "Bicycles retrieved successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    {
      res.status(500).json({
        message: "Validation failed",
        success: false,
        error: err,
      });
    }
  }
};

// 4. Update a Bicycle into db
const updateABicycleintoDB = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const body = req.body;
    // console.log({ id }, { body });

    const result = await bicycleServices.updateABicycle(
      { _id: new mongoose.Types.ObjectId(id) },
      body
    );
    console.log("updated", result);
    res.status(200).json({
      message: "Bicycles data updated successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    {
      res.status(500).json({
        message: "Validation failed",
        success: false,
        error: err,
      });
    }
  }
};

//5. Delete a Bicycle
const deleteABicyclefromDb = async (req: Request, res: Response) => {
  try {
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
  } catch (err) {
    {
      res.status(500).json({
        message: "Validation failed",
        success: false,
        error: err,
      });
    }
  }
};

export const bicycleControllers = {
  createBicycle,
  getBicyclesFromDb,
  getASpecificBicycleFromDb,
  updateABicycleintoDB,
  deleteABicyclefromDb,
};
