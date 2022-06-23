const { Router } = require("express");
const router = Router();


router.post('/students');
router.delete('/students/:id');

// Вывод всех студентов
router.get("/students");

// Все студенты по groupid
router.get("/students/grade/:gradeId");

// Вывод заметок о студенту
router.get("/students/review/:userId");

// Студенты, оплатившие 0%
router.get("/students/paymentno");

// Студенты, оплатившие 50%
router.get("/students/paymenthalf");

// Студенты, оплатившие 100%
router.get("/students/paymentfull");

// Вывод студентов по statusid
router.get("/students/:statusId");


module.exports = router;
