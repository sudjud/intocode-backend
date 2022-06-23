const { Router } = require("express");
const { route } = require(".");

const router = Router();

router.get("/students");
router.get("/students/grade/:gradeId");
router.get("/students/review/:userId");
router.get("/students/paymentno");
router.get("/students/paymenthalf");
router.get("/students/paymentfull");
router.get("/students/:statusId");

