const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  name: String,
  grade: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Group",
  },
  payment: Number,
  review: [
    {
      text: String,
    },
  ],
  status: {
    ref: "Status",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
