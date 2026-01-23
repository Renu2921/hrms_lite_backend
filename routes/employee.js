import express from "express";
import { addEmployee, allEmployee, deleteEmployee } from "../controller/employee.js";

const employeeRouter=express.Router();

employeeRouter.post("/newEmployee",addEmployee);
employeeRouter.get("/allEmployee",allEmployee);
employeeRouter.delete("/deleteEmployee/:id",deleteEmployee);

export default employeeRouter;