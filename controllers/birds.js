const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);

        res.locals.birds = currentUser.birds;

        res.render('../views/birds/index.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/new', (req, res) => {
    res.render('../views/birds/new.ejs');
});

router.post('/', async (req, res) => {
    try {
        req.body.seenBird = req.body.seenBird === 'on';

        const currentUser = await User.findById(req.session.user._id);

        currentUser.birds.push(req.body);

        await currentUser.save();

        res.redirect(`/users/${currentUser._id}/birds`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/:birdId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const selectedBird = currentUser.birds.id(req.params.birdId);

        res.render('../views/birds/show.ejs', { bird: selectedBird });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;