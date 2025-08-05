const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/profile-pic', async (req, res) => {
    try {
        res.render('../views/user/profile-pic.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.put('/profile-pic', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const profilePicRegex = /^https?:\/\/.*\.(png|jpg|jpeg|gif)$/i;

        if (!profilePicRegex.test(req.body.profilePic)) {
            return res.send("Invalid URL");
        }

        currentUser.image = req.body.profilePic;
        res.locals.user.image = currentUser.image;

        await currentUser.save();

        res.redirect(`/users/${currentUser._id}/birds`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.delete('/profile-pic', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.image.delete;

        currentUser.image = '/images/default-profile-pic.jpeg';
        req.session.user.image = currentUser.image;

        await currentUser.save();

        res.redirect(`/users/${currentUser._id}/birds`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
})

module.exports = router;