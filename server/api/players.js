const express = require('express');
const router = express.Router();
const { Player } = require('../db');

router.get('/', async (req,res, next) => {
   try {
        const response = await Player.findAll()
        console.log(response)
        res.send(response)
        next()
   } catch (err) {
        console.log(err)
}
});

// router.get('/:id', async (req, res, next) => {
   
// })

// router.post('/', async (req, res, next) => {
    
// })

// router.delete('/:id', async (req, res, next) => {
   
// })

// router.put('/:id', async (req, res, next) => {
   
// })

module.exports = router;