const { Router } = require("express");
const { route } = require(".");

const router = Router();

// Вывод всех групп
router.get('/groups');

// Вывод по неделе, на которой находится группа
router.get('/groups/:id/week/:week');

// Вывод групп, окончивших обучение
router.get('/groups/finished');

// Процент получивших оффер по groupid
router.get('/groups/offer')


router.post('/groups');
router.get('/groups/:id');
router.patch('/groups/:id');

module.exports = router;