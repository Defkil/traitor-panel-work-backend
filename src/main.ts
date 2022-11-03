import { container } from './inversify.config'
import { TYPES } from './inversify.types'
import { AppInterface } from './App'
import { ServerInterface } from './service/server/server.interface'
/*
const app = fastify();

app.get('/', async (_request, reply) => {
    reply.send({ hello: 'world' });
})

// @ts-ignore
if (import.meta.env.PROD)
    app.listen(3000);

*/

const app = container.get<AppInterface>(TYPES.App)
app.setup()
app.start()

export const traitorPanelWorkBackend = container.get<ServerInterface>(
  TYPES.Service.Server
).fastify
