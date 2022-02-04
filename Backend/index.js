const express = require("express");
require("dotenv/config");
const Routes = require("./src/routes");

const app = express();

app.use(express.json());

app.use(Routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Servidor está ligado na porta ${port}`));
