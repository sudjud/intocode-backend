const { Router } = require("express");
const { groupController } = require('../controllers/group.controller');

const router = Router();

// Вывод всех групп
router.get('/groups', groupController.getGroups);

router.post('/groups', groupController.addGroups);

// Вывод по неделе, на которой находится группа
router.get('/groups/:id/week/:week');

// Вывод групп, окончивших обучение
router.get('/groups/finished');

// Процент получивших оффер по groupid
router.get('/groups/:id/offer')


router.get('/groups/:id');
router.patch('/groups/:id');

module.exports = router;