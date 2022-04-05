const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const { router } = require("./routes/index");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, POST, PUT, GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  app.use(cors());
  next();
});

app.use(router);
app.use(bodyParser.json());

const server = app.listen(8080, () => {
  console.log("API rodando na porta 5000");
});
