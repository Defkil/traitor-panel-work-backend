import {LoggerInterface} from "../logger.interface";
import {injectable} from "inversify";
import {Logger, pino} from 'pino'
@injectable()
export class Pino implements LoggerInterface {
    private logger: Logger
    constructor() {
        this.logger = pino({enabled: true}, )//pino.destination("./pino-logger.log"))
    }

    trace(msg: string) { this.logger.trace(msg) }
    debug(msg: string) { this.logger.debug(msg) }
    info(msg: string) { this.logger.info(msg) }
    warn(msg: string) { this.logger.warn(msg) }
    error(msg: string) { this.logger.error(msg) }
    fatal(msg: string) { this.logger.error(msg) }

    child(mergingObject: any): LoggerInterface {
        return this.logger.child(mergingObject)
    }
}