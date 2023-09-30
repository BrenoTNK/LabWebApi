const server = require("./server");


(async () => {
  await server.start();

  console.log("Server started", server.info.uri);
})();

