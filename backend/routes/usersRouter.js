const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/', (req, res, next) => {
    User.find({}, (err, users) => {
        if(err) {
            return next(err);
        }
        res.json(users);
    });
});

router.route('/add').post((req, res, next) => {
    const username = req.body.username;
    console.dir('request ' + req.body.username);
    const newUser = new User({
        username: username
    });
    console.log(newUser);
    newUser.save()
    .then( () => res.json('User added'))
    .catch( err => res.status(400).json('Error: ' + err));
});

module.exports = router;