import express from "express";
import expressAsyncHandler from "express-async-handler";
import verifyToken from "../app/middleware/auth.js";
import {
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  destroyCustomer,
  restoreCustomer,
  getCustomerTrash,
} from "../app/controllers/customerController.js";
const route = express.Router();

route.get("/", expressAsyncHandler(getCustomer));
route.get("/trash", expressAsyncHandler(getCustomerTrash));
route.post("/create", expressAsyncHandler(createCustomer));
route.put("/edit/:id", expressAsyncHandler(updateCustomer));
route.delete("/delete/:id", expressAsyncHandler(deleteCustomer));
route.delete("/destroy/:id", expressAsyncHandler(destroyCustomer));
route.patch("/restore/:id", expressAsyncHandler(restoreCustomer));

export default route;
