const mongoose = require('mongoose'), Task = mongoose.model('Tasks');

exports.index = (req, res) => {
    Task.find({}, (err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
}

exports.create = (req, res) => {
    let newTask = new Task(req.body);
    newTask.save((err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
}

exports.show = (req, res) => {
    Task.findById(req.params.taskId, (err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
}

exports.edit = (req, res) => {
    Task.findOneAndUpdate({
        _id: req.params.taskId,
    },
    req.body,
    { new: true },
    (err, task) => {
        if (err) res.send(err)
        res.json(task)
    });
}

exports.destroy = (req, res) => {
    Task.remove({
        _id: req.params.taskId
    }, (err, task) => {
        if (err)
            res.send(err)
        res.json(task)
    });
}