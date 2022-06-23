const { Router } = require('express');
const router = Router();

router.use(require('./'));

// Вывод всех студентов
// Все студенты по groupid
// Вывод заметок о студенту
// Студенты, оплатившие 100%
// Студенты, оплатившие 0%
// Студенты, оплатившие 50%
// Вывод студентов по statusid
// Вывод всех групп
// Вывод по неделе, на которой находится группа
// Вывод групп, окончивших обучение
// Процент получивших оффер по groupid


module.exports = router;
