import express from "express";
import { create, deleteUser, getAll, getOne, update } from "../controller/userController.js";
import asyncWrap from "../utils/asyncWrap.js";

const route = express.Router();

route.post("/create", asyncWrap(create));
route.get("/getAll", asyncWrap(getAll));
route.get("/getOne/:id", asyncWrap(getOne));
route.put("/update/:id", asyncWrap(update));
route.delete("/delete/:id", asyncWrap(deleteUser));

export default route;
