import { injectable, inject } from "inversify";
import {ServerInterface} from "../server.interface";
import {fastify} from 'fastify'
import {TYPES} from "../../../inversify.types";
import {LoggerInterface} from "../../logger/logger.interface";
import {Logger} from "pino";
import {FastifyInstance} from "fastify/types/instance";
import {ConfigInterface} from "../../config/config.interface";

/**
 * Fastify with logging and secure sessions
 */
@injectable()
export class Fastify implements ServerInterface {
    private server: FastifyInstance
    private logger: LoggerInterface
    fastify: FastifyInstance

    /**
     * setups logger
     * @param config config data
     * @param logger logger
     */
    constructor(
        @inject(TYPES.Service.Config) private config: ConfigInterface,
        @inject(TYPES.Service.Logger) logger: LoggerInterface
    ) {
        this.fastify = this.server = fastify({
            logger: logger.child({module: 'fastify-internal'}) as Logger
        })
        this.logger = logger.child({
            module: 'fastify'
        })
    }

    setup() {
        console.log(this.config);

        this.server.get('/', async (_request, reply) => {
            console.log('a');
            console.log('b');
            console.log('c');

            reply.send({ hello: 'world' });
        })

        this.setupSessions()
    }

    /** starts fastify server */
    start() {
        this.logger.info('starting server')

        if(!process.env.__VITE_RUNTIME__) {
            this.server.listen({
                port: 3000
            }).then(_e => {
                this.logger.info('server started')
            });
        }
    }


    /**
     * setup secure session plugin
     * @private
     */
    private setupSessions() {
    }
}