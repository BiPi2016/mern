const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

const excercisesRouter = require('./routes/exercisesRouter');
const usersRouter = require('./routes/usersRouter');

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to database');
});
db.on('error', console.log.bind(console, 'Error connecting to database'));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/excercise', excercisesRouter);
app.use('/user', usersRouter);

app.use((req, res, next) => {
    const error = new Error('Resource not found');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    console.log('In error handler')
    res.status(err.status || 500);
    res.json({
        error: err.message
    });
});

app.listen(port, () => {
    console.log('Server listening at port ' + port);
});

