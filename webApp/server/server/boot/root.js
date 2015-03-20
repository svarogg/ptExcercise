module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/status.js', server.loopback.status());
  server.use(router);
};
