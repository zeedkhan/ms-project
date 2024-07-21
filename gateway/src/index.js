const { createServer } = require("../src/utils/server");
const config = require("config")

const app = createServer();
const port = config.get("port");

app.listen(port, () => {
    console.log("Running", port)
})