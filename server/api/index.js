const express = require('express');
const router = express.Router();

const routerStudents = require('./students');
const routerCampuses = require('./campuses');

router.use('/students', routerStudents);
router.use('/campuses', routerCampuses);

module.exports = router;