const express = require("express");

const app = express();
const { resolve } = require("path");

app.use(express.static("build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname,  "build", "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
    console.log("OK")
});