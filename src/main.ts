import fastify from 'fastify';

const app = fastify();

app.get('/', async (_request, reply) => {
    reply.send({ hello: 'world' });
})

// your beautiful code...

// @ts-ignore
if (import.meta.env.PROD)
    app.listen(3000);

export const traitorPanelWorkBackend = app;