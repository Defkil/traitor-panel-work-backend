import {FastifyInstance} from "fastify/types/instance";

/**
 * interface for user interaction on fastify
 */
export interface UiInterface {

    /**
     * mount ui on fastify
     * @param fastify
     */
    mount(fastify: FastifyInstance): void
}