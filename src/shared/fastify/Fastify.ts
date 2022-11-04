import { injectable, inject } from 'inversify'
import { fastify } from 'fastify'
import { Logger } from 'pino'
import { FastifyInstance } from 'fastify/types/instance'
import {TYPES} from "../../inversify.types";
import {FastifyInterface} from "./fastify.interface";
import {LoggerInterface} from "../../service/logger/logger.interface";

/**
 * Fastify with logging and secure sessions
 */
@injectable()
export class Fastify implements FastifyInterface {
  private server: FastifyInstance
  private logger: LoggerInterface
  fastify: FastifyInstance
  constructor(
    @inject(TYPES.Service.Logger) logger: LoggerInterface
  ) {
    this.fastify = this.server = fastify({
      logger: logger.child({ module: 'fastify-internal' }) as Logger,
    })
    this.logger = logger.child({
      module: 'fastify',
    })
  }

  setup() {
    this.logger.info('setting up fastify')
  }

  /** starts fastify server */
  start() {
    this.logger.info('starting server')
    if (!process.env.__VITE_RUNTIME__) {
      this.server
        .listen({
          port: 3000,
        })
        .then((_e) => {
          this.logger.info('server started')
          this.logger.error(_e)
        })
    }
  }
}
