const port = 8080 || process.env.PORT;

const path = require("path");
const express = require("express");

const app = express();

app
  .use(express.static(path.join(__dirname, "public")))
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  })
  .listen(port, () => console.log(`listening on port ${port}`));
