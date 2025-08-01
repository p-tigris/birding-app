const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
    try {
        const foundUsers = await User.find({});

        res.locals.users = foundUsers;

        res.render('../views/flock/the-flock.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;