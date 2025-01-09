import { Request, Response } from "express";
import { bicycleModel } from "./bicycle.schema";
import { bicycleServices } from "./bicycle.service";

const createBicycle = async (req: Request, res: Response) => {
  const bicycleData = req.body.bicycles;
  console.log("i am bicycles", bicycleData);
  const result = await bicycleServices.createBicycleIntoDb(bicycleData);

  res.status(200).json({
    status: "true",
    message: "bicycle created successfully",
    data: result,
  });
};

export const bicycleControllers = {
  createBicycle,
};
