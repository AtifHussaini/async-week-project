const express = require('express')
const router = express.Router();

const routerStudents = require('./students');
const routerCampuses = require('./campuses')

// router.get('/', (req, res) => {
//     res.send("This is Joe")
// })

router.use('/students', routerStudents)
router.use('/campuses', routerCampuses)

module.exports = router