const express = require('express');
const router = express.Router();
const db_produtos = require('./db');

router.get('/', (req, res) => {
    res.status(200).json(db_produtos);
})

module.exports = router;