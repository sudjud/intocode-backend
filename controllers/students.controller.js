const Student = require("../models/Student.model.js");

module.exports.studentController = {
  getStudents: async (req, res) => {
    try {
      const student = await Student.find().populate("status");
      res.json(student);
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
      res.json(
        await Student.findById(req.params.userId)
          .select("review")
          .populate("review")
      );
    } catch (error) {
      res.json(error.toString());
    }
  },
  getStudentPaymentNo: async (req, res) => {
    try {
      res.json(await Student.find({ payment: 0 }).populate("review status"));
    } catch (error) {
      res.json(error.toString());
    }
  },
  getStudentPaymentHalf: async (req, res) => {
    try {
      res.json(await Student.find({ payment: 0.5 }).populate("review status"));
    } catch (error) {
      res.json(error.toString());
    }
  },
  getStudentPaymentFull: async (req, res) => {
    try {
      res.json(await Student.find({ payment: 1 }).populate("review status"));
    } catch (error) {
      res.json(error.toString());
    }
  },
  getStudentStatusId: async (req, res) => {
    try {
      res.json(
        await Student.find({ status: req.params.statusId }).populate(
          "review status"
        )
      );
    } catch (error) {
      res.json(error.toString());
    }
  },
  addReview: async (req, res) => {
    try {
    } catch (error) {}
  },
  postStudent: async (req, res) => {
    try {
      const { name, grade, payment, review, status } = req.body;
      const data = await Student.create({
        name,
        grade,
        payment,
        review,
        status,
      });
      res.json(`Студент ${data.name} добавлен!`);
    } catch (error) {
      res.json(error.toString());
    }
  },
  patchStudentId: async (req, res) => {
    try {
      const { name, grade, payment, review, status } = req.body;
      const { userId } = req.params;
      const data = await Student.findByIdAndUpdate(userId, {
        name,
        grade,
        payment,
        review,
        status,
      });
      res.json(`Студент ${data.name} изменен!`);
    } catch (error) {
      res.json(error.toString());
    }
  },
  deleteStudent: async (req, res) => {
    try {
      const { userId } = req.params;
      await Student.findByIdAndRemove(userId);
      res.json("Студент удален!");
    } catch (error) {
      res.json(error.toString());
    }
  },
};
