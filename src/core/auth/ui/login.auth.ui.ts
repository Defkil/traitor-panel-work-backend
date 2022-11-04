import {injectable} from "inversify";
import {UiInterface} from "../../../shared/interfaces/ui.interface";
import {FastifyReply, FastifyRequest} from "fastify";
import {FastifyInstance} from "fastify/types/instance";

@injectable()
export class LoginAuthUi implements UiInterface {

    mount(fastify: FastifyInstance) {
        fastify.get(
            '/',
            async (_request: FastifyRequest, reply: FastifyReply) => {
                reply.status(200).send({
                    status: 'Hello World'
                });
            }
        );
    }
}