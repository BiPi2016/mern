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

/* router.get('/:id', (req, res, next) => {
    User.findById(req.params.id, (err, user) => {
        if(err) {
            return(err.status(400).json('Error: ' + err));
        }
        return res.json(user);
    });
}); */

router.get('/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then(user => {
        if(!user)
            return next();
        res.json(user)
    })
    .catch(err => next(err));
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

router.put('/update/:id', (req, res, next) => {
    User.findByIdAndUpdate(req.body.id,
         {username: req.body.username},
         {
            runValidators: true,
             new: true
         }, (err, user) => {
             if(err)
                next(err);
            return res.json('User updated ' +user);
         }
    );
});

router.delete('/:id', (req, res, next) => {
    console.log('will delete ' + req.params.id);
    User.findByIdAndDelete({_id:req.params.id})
    .then( result => res.json("User deleted " + result))
    .catch( err => res.status(404).json('Error: ' + err));
});

module.exports = router;