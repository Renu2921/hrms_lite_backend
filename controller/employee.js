import { Employee } from "../models/employee.js";

export const addEmployee=async(req,res)=>{
    try{
         const employee=req.body;
    const newEmployee=new Employee({...employee});
   await newEmployee.save();
    console.log(newEmployee);
    res.status(200).json({ success: true,
        data: newEmployee,
        message: "New Employee added successfully",})

    }catch(error){
        res.status(401).json({message:error.message,success:false});
    }
 
};

export const allEmployee=async(req,res)=>{
   try{
    const employeeList=await Employee.find();
    console.log(employeeList);
    res.status(200).json({success:true,data:employeeList,message:"Employee List found Successfully"});
   }catch(error){
    res.status(401).json({message:error.message,success:false});
   }
}

export const deleteEmployee=async(req,res)=>{
    try{
      const id=req.params.id;
     const employee= await Employee.findByIdAndDelete(id);
      res.status(200).json({success:true,message:"Employee Deleted Successfully",data:employee});
    }catch(error){
         res.status(401).json({message:error.message,success:false});
    }
}

