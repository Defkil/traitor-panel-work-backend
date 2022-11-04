import { FastifyInstance } from 'fastify/types/instance'

export interface FastifyInterface {
  setup(): void
  start(): void
  fastify: FastifyInstance
}
