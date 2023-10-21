const Hapi = require("@hapi/hapi");
const routes = require("./config/routes");
const config = require("./config/env-config")
const HapiJWT = require("hapi-auth-jwt2");


const server = Hapi.server({
  host: config.host,
  port: config.port,
});

const plugins = [
  {
    plugin: routes,
    options: {
      routesBaseDir: './api'
    }
  }
];

const validate = async (decoded, req, h) => {
  return { isValid: true };
};

if (config.jwt.enable === true) {
  server.register(HapiJWT);
  server.auth.strategy('jwt', 'jwt', { key: 'empresario', validate });
  server.auth.default('jwt');
}


module.exports = { server, plugins };
