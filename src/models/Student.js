const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
      minlength: [2, "Name must contain at least 2 characters"],
      maxlength: [80, "Name cannot exceed 80 characters"]
    },
    email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
     /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
     "Enter a valid email address"
  ]
},
    rollNo: {
      type: String,
      required: [true, "Roll number is required"],
      unique: true,
      trim: true,
      uppercase: true
    },
    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true
    },
    semester: {
      type: Number,
      required: [true, "Semester is required"],
      min: [1, "Semester must be between 1 and 8"],
      max: [8, "Semester must be between 1 and 8"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
