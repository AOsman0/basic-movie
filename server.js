const express = require("express");
const routes = require("./src/routes/index");
const sequelize = require("./config/connection");

// Import model to sync table with database
const Movie = require("./models/Movie");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
