const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.send("EAE GALERES 222");
});

app.listen(3333);
