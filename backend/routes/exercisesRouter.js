const express = require('express');
const router = express.Router();

const Excercise = require('../models/excercise.model');

router.get('/', (req, res, next) => {
    Excercise.find({})
    .then( excercises => res.json(excercises))
    .catch( err => res.status(400).json("Error: " + err));
});

router.post('/add', (req, res, next) => {
    const excercise = new Excercise({
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date)
    });
    
    excercise.save()
    .then( () => res.json('Exercise added'))
    .catch( err => res.status(400).json('Error: ' + err));

});

router.get('/:id', (req, res, next) => {
    Excercise.findById(req.params.id, (err, excercise) => {
        if(err) {
            return(err.status(400).json('Error: ' + err));
        }
        return res.json(excercise);
    });
});

router.delete('/:id', (req, res, next) => {
    Excercise.findByIdAndDelete({_id:req.params.id})
    .then( () => res.json('Excercise deleted'))
    .catch( err => res.status(400).json('Error. ' + err))
});

router.put('/update/:id', (req, res, next) => {
    console.log(req.body);
    Excercise.updateOne({_id:req.params.id}, {
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date)
    })
    .then( () => res.json('Excercise updated'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;