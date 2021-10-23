const express = require("express");

// Modules
const api = require("./api");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("App is inited");
});

// Usin' API
app.use("/api", api);

// Launch app
app.listen(3000, () => console.log("App is started on port 3000"));
