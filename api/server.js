'use strict';

const strapi = require('@strapi/strapi');

module.exports = async (req, res) => {
  if (!global.strapi) {
    global.strapi = await strapi().load();
    await global.strapi.start();
  }

  // Let Strapi handle the incoming request
  global.strapi.server.app.handle(req, res);
};
