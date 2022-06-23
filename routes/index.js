const { Router } = require('express');
const router = Router();

router.use(require('./group.route'));
router.use(require('./students.route'));

module.exports = router;

