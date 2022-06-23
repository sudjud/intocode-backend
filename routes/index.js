const { Router } = require("express");
const router = Router();

router.use(require('./group.route'));
router.use(require('./students.route'));
router.use(require('./status.route'))
module.exports = router;
