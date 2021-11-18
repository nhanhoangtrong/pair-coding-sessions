const View = require('./views');
const TodoRepository = require('./repository');
const TodoListView = require('./TodoListView');

/**
 * 
 * @param {import("fastify").FastifyInstance} fastify 
 * @param {import("fastify").FastifyPluginOptions} options 
 */
async function registerTodos(fastify, options) {
    const repo = new TodoRepository();
    const listView = new TodoListView(repo);
    const view = new View(repo, listView);

    fastify.post('/todo', view.postTodo);
    fastify.get('/todos', view.getUncompleted);
};

module.exports = registerTodos;
