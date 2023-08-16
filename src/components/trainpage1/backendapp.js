const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const data = require("./getData/data");
app.use("/data", data);
app.listen(3000, () => {
  console.log("running");
});
