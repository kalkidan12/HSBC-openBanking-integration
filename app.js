const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Home Route Here");
});

module.exports = app;
