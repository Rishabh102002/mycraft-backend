const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./utils/config");

// connect database
console.log("connecting...");
mongoose
  .connect(config.MONGO_URI)
  .then((res) => console.log("database connected..."))
  .catch((err) => console.log(err));

const PORT = config.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
