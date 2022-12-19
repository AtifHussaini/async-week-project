const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../db');

router.get('/', async (req, res, next) => {
    try {
        const response = await Student.findAll({include:[Campus]});
        res.send(response);
        next();
    } catch (err) {
        console.log(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const response = await Student.findByPk(id, {include: [Campus]});
        res.send(response);
        next();
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const response = await Student.create(req.body);
        res.send(response);
        next();
    } catch (err) {
        console.log(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const response = await Student.findByPk(id);
        await response.destroy();
        res.send(response);
        next();
    } catch (err) {
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        
        const id = req.params.id;
        const row = await Student.findByPk(id);
        const updateRow = row.update({campusId: null});
        res.send(updateRow);
        next();
    } catch (err) {
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const row = await Student.findByPk(id);
        const newRow = row.update(req.body);
        res.send(newRow);
        next();
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;