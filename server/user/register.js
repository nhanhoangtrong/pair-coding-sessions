const views = require('./views');

/**
 * 
 * @param {import("fastify").FastifyInstance} fastify 
 * @param {import("fastify").FastifyPluginOptions} options 
 */
async function registerUser(fastify, options) {
    fastify.get('/user/:name', views.getUserByName);
    fastify.post('/user', views.createNewUser);
    fastify.delete('/user/:email', views.deleteUserByEmail);
};

module.exports = registerUser;
