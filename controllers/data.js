const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const birds = require('../data/bird-data.js');

router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find({});

        res.render('../views/database/birds.ejs', { users: allUsers, birdDB: birds });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;