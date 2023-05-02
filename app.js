const express = require("express");
const authRoutes = require("./routes/accountInformationRoutes");
const app = express();
app.use("/api", authRoutes);
app.get("/", (req, res) => {
	res.send("Home Route Here");
});

module.exports = app;
