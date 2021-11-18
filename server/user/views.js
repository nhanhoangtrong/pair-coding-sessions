const controller = require('./controller');

const replyError = (reply, status, msg) => {
    reply.statusCode = status;
    reply.send({
        message: msg,
    });
}

module.exports = {
    /**
     * @param {import("fastify").FastifyRequest} request
     * @param {import("fastify").FastifyReply} reply
     */
    async getUserByName(request, reply) {
        const { params } = request;
        const { name } = params;

        if (!name) {
            return replyError(reply, 400, 'Bad request');
        }
        const user = controller.findByName(name);
        if (!user) {
            return replyError(reply, 404, 'Not found');
        }

        return user;
    },
    
    async createNewUser(request, reply) {
        const { body } = request;
        const { name, email } = body;
        if (!name || !email) {
            return replyError(reply, 400, 'Bad request');
        }
        const newUser = controller.createUser(name, email);

        return newUser;
    },

    async deleteUserByEmail(request, reply) {
        const { body: { email } } = request;
        if (!email) {
            return replyError(reply, 400, 'Bad request');
        }
        controller.deleteUserByEmail(email);
    }
};