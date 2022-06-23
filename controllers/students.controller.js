const Student = require("../models/Student.model.js");
module.exports.studentController = {
  getStudents: async (req, res) => {
    try {
      res.json(await Student.find({}).populate("review status"));
    } catch (error) {
      res.json(error.toString());
    }
  },
  getStudentsGrade: async (req, res) => {
    try {
      res.json(
        await Student.find({ grade: req.params.gradeId }).populate(
          "review status"
        )
      );
    } catch (error) {
      res.json(error.toString());
    }
  },
  getStudentReview: async (req, res) => {
    try {
      res.json(await Student.findById(req.params.userId).populate("review"));
    } catch (error) {
      res.json(error.toString());
    }
  },
};
