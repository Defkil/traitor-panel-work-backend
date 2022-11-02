import {FastifyInstance} from "fastify/types/instance";

export interface ServerInterface {
    setup(): void
    start(): void
    setup(): void
    fastify: FastifyInstance
}