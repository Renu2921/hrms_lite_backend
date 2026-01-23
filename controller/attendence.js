import Attendance from "../models/attendence.js";

export const markAttendance = async (req, res) => {
  const { employeeId, date, status } = req.body;

  if (!employeeId || !date || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const attendance = await Attendance.create({
      employee: employeeId,
      date,
      status,
    });

    res.status(201).json(attendance);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: "Attendance already marked for this date" });
    }
    res.status(500).json({ message: "Server error" });
  }
};


export const getAttendanceByEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;

    const attendance = await Attendance.find({
      employee: employeeId,
    })
      .sort({ date: -1 })
      .populate("employee", "fullName department");

    res.status(200).json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch attendance" });
  }
};
