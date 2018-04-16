module.exports = function (app) {
    const todoList = require('../controllers/todoController');
    app.route('/tasks')
        .get(todoList.index)
        .post(todoList.create);
    app.route('/tasks/:id')
        .get(todoList.show)
        .put(todoList.edit)
        .delete(todoList.destroy);
}