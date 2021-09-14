import "make-promises-safe";
import config from "config";
import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import fastifyBlipp from "fastify-blipp";
import fastifyJwt from "fastify-jwt";
import fastifyHelmet from "fastify-helmet";
import fastifyCors from "fastify-cors";
import fastifySensible from "fastify-sensible";
import fastifyAuth from "fastify-auth";
import fastifyRateLimit from "fastify-rate-limit";

import fastifySupabase from "@technologiestiftung/fastify-supabase";

import routesAuth from "./authtokens";
import ttn from "../integrations/ttn";
import http from "../integrations/http";

const apiVersion = config.get<number>("apiVersion");
const mountPoint = config.get<string>("mountPoint");
export const buildServer: (options: {
  jwtSecret: string;
  supabaseUrl: string;
  supabaseServiceRoleKey: string;
  logger: boolean;
  issuer: string;
}) => FastifyInstance = ({
  jwtSecret,
  supabaseUrl,
  supabaseServiceRoleKey,
  logger,
  issuer,
}) => {
  const routeOptions = {
    endpoint: "authtokens",
    mount: mountPoint,

    apiVersion: `v${apiVersion}`,

    issuer,
  };
  const server = fastify({ logger, ignoreTrailingSlash: true });

  server.register(fastifyBlipp);
  server.register(fastifyRateLimit, {
    allowList: ["127.0.0.1"],
  });
  server.register(fastifyHelmet);
  server.register(fastifyCors);
  server.register(fastifySensible);
  server.register(fastifyAuth);
  server.register(fastifyJwt, {
    secret: jwtSecret,
  });

  server.register(fastifySupabase, {
    supabaseUrl,
    supabaseServiceRoleKey,
  });
  server.decorate(
    "verifyJWT",
    async (request: FastifyRequest, _reply: FastifyReply) => {
      await request.jwtVerify();
    }
  );
  server.register(routesAuth, routeOptions);
  server.register(ttn);
  server.register(http);

  [
    "/",
    `/${routeOptions.mount}`,
    `/${routeOptions.mount}/${routeOptions.apiVersion}`,
  ].forEach((path) => {
    server.route({
      method: ["GET"],
      url: path,
      logLevel: "warn",
      handler: async (request, reply) => {
        reply.send({
          comment: "healthcheck",
          method: `${request.method}`,
          url: `${request.url}`,
        });
      },
    });
  });
  return server;
};

export default buildServer;
