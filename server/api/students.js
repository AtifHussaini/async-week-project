const express = require('express')
const router = express.Router();
const { Student, Campus } = require('../db')

// GET /students
router.get('/', async (req, res, next) => {
    try {
        const response = await Student.findAll({include:[Campus]})
        res.json(response)
        next()
    } catch (err) {
        console.log(err)
    }
});

// GET /students/:id
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const response = await Student.findByPk(id, {include: [Campus]})
        res.json(response)
        next()
    } catch (err) {
        console.log(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const response = await Student.create(req.body)
        res.send(response)
        next()
    } catch (err) {
        console.log(err)
    }
})

router.delete('/', async (req, res, next) => {
    try {
        console.log(req.body)
        const response = await Student.findByPk(req.body)
        console.log("HELLOOOOOOOO")
        await response.destroy()
        res.send(response)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;