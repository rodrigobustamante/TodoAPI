const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todoDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoRoutes');
routes(app);

app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: req.originalUrl + ' no encontrada' })
});

console.log(port);