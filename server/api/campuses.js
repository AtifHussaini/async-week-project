const express = require('express');
const router = express.Router();
const { Campus, Student } = require('../db')

// GET /campuses
router.get('/', async (req,res) => {
    try {
        const response = await Campus.findAll({include:[Student]})
        res.send(response)
    } catch (err) {
        console.log(err)
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const response = await Campus.findByPk(id, {include: [Student]})
        res.json(response)
        next()
    } catch (err) {
        console.log(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const response = await Campus.create(req.body)
        res.send(response)
        next()
    } catch (err) {
        console.log(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const response = await Campus.findByPk(id)
        await response.destroy()
        res.send(response)
        next();
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;