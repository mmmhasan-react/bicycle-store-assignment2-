import express, { request, response } from "express";
import app from "../../../app";
import { bicycleControllers } from "./bicycle.contoller";

const router = express.Router();

router.post("/createBicycle", bicycleControllers.createBicycle);

export const bicyclerouter = router;
