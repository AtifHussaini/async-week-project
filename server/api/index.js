const express = require('express');
const router = express.Router();

const routerPlayers = require('./players');

router.use('/players', routerPlayers);

module.exports = router;