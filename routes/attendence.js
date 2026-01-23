import express from "express";
import { getAttendanceByEmployee, markAttendance } from "../controller/attendence.js";

const attendenceRouter=express.Router();

attendenceRouter.post("/markAttendence",markAttendance);
attendenceRouter.get("/attendance/:employeeId",getAttendanceByEmployee);

export default attendenceRouter;