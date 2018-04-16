const mongoose = require('mongoose'), Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Debe ingresar un nombre para la tarea',
    },
    description: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now(),
    },
    status: {
        type: String,
        enum: ['Pendiente', 'En proceso', 'Realizada'],
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);