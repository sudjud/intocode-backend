const { Router } = require("express");
const { statusController } = require("../controllers/status.controller.js");
const router = Router();

// Добавление статуса
router.post("/status", statusController.postStatus);

//Удаление статуса
router.delete("/status/:statusId", statusController.deleteStatus);

//Изменение статуса
router.patch("/status/:statusId", statusController.patchStatus);

//Вывод всех статусов
router.get("/status", statusController.getStatus);

//Вывод статуса по Id
router.get("/status/:statusId", statusController.getStatusId);

module.exports = router;
