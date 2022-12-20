const express = require("express");
const app = express();

app.use("/static", express.static("public")); //add public folder to the web server static path

app.listen(5001, () => {
  console.log("listening on port 5001");
});
