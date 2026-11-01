const mongoose = require("mongoose");
const Student = require("../models/Student");

// POST /api/students - create a student
exports.createStudent = async (req, res, next) => {
  try {
    const { name, email, rollNo, course, semester } = req.body;

    if (!name || !email || !rollNo || !course || semester === undefined) {
      return res.status(400).json({
        success: false,
        message: "name, email, rollNo, course and semester are required"
      });
    }

    const student = await Student.create({ name, email, rollNo, course, semester });

    return res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/students - get all students
exports.getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/students/:id - get one student
exports.getStudentById = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid student ID format" });
    }

    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    return res.status(200).json({ success: true, data: student });
  } catch (error) {
    next(error);
  }
};

// PUT /api/students/:id - update a student
exports.updateStudent = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid student ID format" });
    }

    const allowedFields = ["name", "email", "rollNo", "course", "semester"];
    const updates = {};
    for (const field of allowedFields) {
      if (req.body[field] !== undefined) updates[field] = req.body[field];
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Provide at least one field to update"
      });
    }

    const student = await Student.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true
    });

    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: student
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/students/:id - delete a student
exports.deleteStudent = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid student ID format" });
    }

    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      data: student
    });
  } catch (error) {
    next(error);
  }
};
