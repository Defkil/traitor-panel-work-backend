import { container } from './inversify.config'
import { TYPES } from './inversify.types'
import { AppInterface } from './App'
import {FastifyInterface} from "./shared/fastify/fastify.interface";

/**
 * Main entry point for the application
 */
async function start() {
    const app = container.get<AppInterface>(TYPES.App)
    await app.setup()
    await app.start()
}

start().catch((err) => {
    console.info('Error starting application', err)
    console.error(err)
    process.exit(1)
})

/**
 * Vite's server export
 */
export const traitorPanel = container.get<FastifyInterface>(
  TYPES.Service.Server
).fastify
