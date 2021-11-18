const fastify = require('fastify')({ logger: { level: 'debug' } });

fastify.register(require('./todos/register'));
fastify.register(require('./user/register'));

(async function run() {
    try {
        await fastify.listen(3000);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})();
