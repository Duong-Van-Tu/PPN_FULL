import express from "express";
import expressAsyncHandler from "express-async-handler";
import verifyToken from "../app/middleware/auth.js";

import { logged, register, login } from "../app/controllers/userController.js";
const route = express.Router();

route.post("/register", expressAsyncHandler(register));
route.post("/login", expressAsyncHandler(login));
route.get("/", verifyToken, expressAsyncHandler(logged));

export default route;
