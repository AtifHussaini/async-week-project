const express = require('express');
const Sequelize = require('sequelize')
const router = express.Router();
const { Player } = require('../db');

router.get("/allPlayers", async (req,res, next) => {
     try {
          const response = await Player.findAll()
          res.send(response)
          next()
     } catch (err) {
          console.log(err)
     }
})

router.get('/', async (req,res, next) => {
   try {
        const response = await Player.findAll({order: Sequelize.literal('random()'), limit:5})
        res.send(response)
        next()
   } catch (err) {
        console.log(err)
}
});

module.exports = router;