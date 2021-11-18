const Todo = require('./TodoModel');

class View {
    constructor(repo, listTodoView) {
        this.todoRepo = repo;
        this.listTodoView = listTodoView;
    }

    postTodo = (request, reply) => {
        const todo = new Todo(request.body.text, request.body.complete);
        console.log(this);
        this.todoRepo.push(todo);
        reply.send(todo);
    }

    getUncompleted = (request, reply) => {
        reply.send(this.listTodoView.getUncompletedList());
    }
}

module.exports = View;