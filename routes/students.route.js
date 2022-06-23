const { Router } = require("express");
const { studentController } = require("../controllers/students.controller");
const router = Router();

//Добавление студента
router.post('/students', studentController.postStudent);

// Удаление студента
router.delete('/students/:userId', studentController.deleteStudent);

// Изменение студента
router.patch('/students/:userId', studentController.patchStudentId)

// Вывод всех студентов
router.get("/students", studentController.getStudents);

// Все студенты по groupid
router.get("/students/grade/:gradeId", studentController.getStudentsGrade);

// Вывод заметок о студенту
router.get("/students/review/:userId", studentController.getStudentReview);

// Студенты, оплатившие 0%
router.get("/students/paymentno", studentController.getStudentPaymentNo);

// Студенты, оплатившие 50%
router.get("/students/paymenthalf", studentController.getStudentPaymentHalf);

// Студенты, оплатившие 100%
router.get("/students/paymentfull", studentController.getStudentPaymentFull);

// Вывод студентов по statusid
router.get("/students/:statusId", studentController.getStudentStatusId);


module.exports = router;
