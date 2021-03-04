const express = require('express');
const cors = require('cors');
const Controllers = require('./Controllers/Controllers');


const app = express();
app.use(express.json());
app.use(cors());

app.post("/singUp",Controllers.singUp);
app.post("/orcamento",Controllers.singUpOrcamento);
app.get("/load",Controllers.load)
app.get("/loadOrcamento",Controllers.loadOrcamento);

module.exports = app;