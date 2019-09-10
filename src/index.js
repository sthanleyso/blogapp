const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
const server = require("http").Server(app);

app.use(express.json());
app.use(require("./routes"));

const PORT = process.env.PORT || 3333;

server.listen(PORT, async () => console.info(`Server listening on http://localhost:${PORT}`));
