const express = require("express");
require("dotenv/config");
const Routes = require("./src/routes");

const app = express();

app.use(express.json());

app.use(Routes);

app.listen(4405, () => console.log("Servidor está ligado na porta 4405"));
