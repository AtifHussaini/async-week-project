const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
const { Campus, Student } = require('../db');

router.get('/', async (req,res, next) => {
    try {
        const response = await Campus.findAll({include:[Student]});
        res.send(response);
        next();
    } catch (err) {
        console.log(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const response = await Campus.findByPk(id, {include: [Student]});
        res.send(response);
        next();
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const response = await Campus.create(req.body);
        res.send(response);
        next();
    } catch (err) {
        console.log(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const response = await Campus.findByPk(id);
        await response.destroy();
        res.send(response);
        next();
    } catch (err) {
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const row = await Campus.findByPk(req.params.id);
        const updatedRow = await row.update(req.body);
        res.send(updatedRow);
        next();
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;